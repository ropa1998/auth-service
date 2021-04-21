const {Etcd3} = require('etcd3');
const {v4: uuidv4} = require('uuid');

export class EtcdManager {
    private port: number;
    private name: string;
    private client: any;
    private time_to_live = 10; // in seconds
    private etcd_host = ['http://127.0.0.1:2379', 'http://127.0.0.1:2389', 'http://127.0.0.1:2399']
    private uuid: string;

    constructor(port: number, name: string) {
        this.port = port;
        this.name = name;
        this.client = new Etcd3({hosts: this.etcd_host});
        this.uuid = uuidv4();
    }

    public async grantLease() {
        const lease = this.client.lease(this.time_to_live);

        lease.on('lost', (error: any) => {
            console.log('😅 We lost our lease as a result of this error:', error);
            console.log('Trying to re-grant it...');
            this.grantLease();
        })

        const key = `/services/${this.name}/${this.uuid}`
        const value = `0.0.0.0:${this.port}`

        const keyBuff = Buffer.from(key, "utf-8");
        const valueBuff = Buffer.from(value, "utf-8");

        console.log("Registering service...");
        await lease.put(keyBuff).value(valueBuff);
        console.log("Service registered");
    }

}
