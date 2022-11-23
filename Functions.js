

module.export = {
  print: (args) => {
    args.map(Subject => {console.log(Subject)})
  },
test: (args)=>{
  args.map(arg=>{
    Functions.print(['Cycling!'])
    if (arg.val == 200) {
      Functions.print(['returning success!'])
      return {worked: true, status:"Success"}
    }else{
      Functions.print(['reterning err!'])
      return {worked: false, status:"Failed :("}
    }
  })
}
}