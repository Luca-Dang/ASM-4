
export class BumblorArabicConverter{
    map: Map<string, number>

    constructor() {
        this.map = new Map<string, number>();
        this.map.set('m',1000);
        this.map.set('d',500);
        this.map.set('c',100);
        this.map.set('l',50);
        this.map.set('x',10);
        this.map.set('v',5);
        this.map.set('i',1);

    }
    dlv(bumblor: string){
        const isD = bumblor.split('d').length-1;
        const isL = bumblor.split('l').length-1;
        const isV = bumblor.split('v').length-1;
        return (isD<=1 && isV<=1 && isL<=1);

    }
    mcxi(bumblor: string){
        const isM = bumblor.split('m').length-1;
        const isC = bumblor.split('c').length-1;
        const isX = bumblor.split('x').length-1;
        const isI = bumblor.split('i').length-1;
        return (isM<=4 && isC<=4 && isX<=4 && isI<=4);
    }

    outOfOrder(bumblor: string){
        for(let i=0; i<(bumblor.length-1); i++){
            if(this.map.get(bumblor[i])! < this.map.get(bumblor[i+1])!){
                console.log(this.map.get(bumblor[i]), this.map.get(bumblor[i+1]));
                return false;
            }
        }
        return true;
    }

    notIncluded(bumblor: string){
        for(let i=0; i<(bumblor.length); i++){
            if(!Array.from(this.map.keys()).includes(bumblor[i])){
                return false;
            }
    }
        return true;
    }


        spaces(bumblor: string){
        return(!bumblor.includes(" "));
    }

    bumblor2arabic(bumblor: string): number {
        bumblor = bumblor.toLowerCase();
        if(this.dlv(bumblor) && this.mcxi(bumblor) && this.notIncluded(bumblor) && this.spaces(bumblor) && this.outOfOrder(bumblor)){
            let total = 0;
            for(let i=0; i<bumblor.length; i++){
                total += this.map.get(bumblor[i])!;
            }
            return total;
        }
        else{
            throw Error("Malformed Number")
        }
    }

    floatPoint(arabic: number){
        return(Number.isInteger(arabic));
    }

    outOfBounds(arabic: number){

        return(1>=arabic && arabic<=4999);
    }
    arabic2bumblor(arabic: number): string {

    }
    
}
