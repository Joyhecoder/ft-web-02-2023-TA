let log = {
    info: (info) => { 
        console.log(`Info: ${info}`)
     },
     warning: (warning) => { 
        console.log(`Info: ${warning}`)
      },
    error: (err) => { 
        console.log(`Info: ${err}`)
     }
}

// log.info("err")

module.exports = log