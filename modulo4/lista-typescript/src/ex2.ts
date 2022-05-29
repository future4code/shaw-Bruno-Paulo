function type (any:any):void{
    const showType:string = typeof any
    console.log(showType)
}

type(process.argv[2])