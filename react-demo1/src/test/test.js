

function isObject(data) {
    return Object.prototype.toString.call(data) === '[object Object]'
}

function isObjArray(data) {
    let arr = []
    if(Array.isArray(data)) {
        for(let item of data){
            console.log(item, 'item')
            arr.push(isObject(item))
        }
        return arr.every(item=> item)
    } else {
        return false
    }
}
// console.log(isObjArray([{a:1}, [1,2]]))

let p = new Promise((resolve, reject)=> {
    resolve('resolve1')
    // reject('reject1')
})
    .then(a=> {
        // console.log(a, 'a')
        // return new Promise(resolve => resolve(111))
        return 111
    }).then(b=> {
        // console.log(b, 'b')
    })
    .catch((...err)=> {
        // console.log(...err, 'err')
})

function prom(data) {
    return new Promise((resolve, reject) => {
        if(data===true) {
            // console.log('success:' + data)
            resolve(data)
        } else {
            // console.log('fail:' + data)
            reject(data)
        }
    })
}

function notice(msg) {
    return msg || '执行成功'
}

async function test(prom1, prom2, notice) {
    // console.log(prom1, prom2, notice, 'prom1, prom2, notice')
    let arr = []
    await prom1.then(done=> {
        console.log(done, 'done1')
        if(done) {
            arr.push(done)
        }
    }).catch(err=> {
        console.log(err, 'err1')
    })
    await prom2.then(done=> {
        console.log(done, 'done2')
        if(done) {
            arr.push(done)
        }
    }).catch(err=> {
        console.log(err, 'err2')
    })
    // await Promise.race([prom1, prom2]).then(done=> {
    //     console.log(done, 'res')
    //     if(done) {
    //         return notice
    //     }
    // }).catch(err=> {
    //     console.log(err, 'err')
    // })
    console.log(arr, 'arr status')
    if(arr.includes(true)) {
        return notice
    }
}
test(prom(true), prom(false), notice()).then(done=> {
    console.log(done, 'test')
})
