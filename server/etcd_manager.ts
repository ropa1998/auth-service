const { Etcd3 } = require('etcd3');

export class EtcdManager {
    private port: number;
    private name:string;
    private client:any;
    private time_to_live = 10;
    private etcd_host = '0.0.0.0:2379'
    
    constructor(port: number, name: string){
        this.port = port;
        this.name = name;
        this.client = new Etcd3( { hosts: this.etcd_host });
    }

    public async grantLease() {
        const lease = this.client.lease(this.time_to_live);
      
        lease.on('lost', (error: any) => {
          console.log('😅 We lost our lease as a result of this error:', error);
          console.log('Trying to re-grant it...');
          this.grantLease();
        })
      
        await lease.put(`sevices/${this.name}`).value(`${this.port}`);
      }

}