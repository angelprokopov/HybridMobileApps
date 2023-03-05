function arrToObj() {
    const entr = new Map([
        ['name','age','gender'],
        ['Pesho','23','male']
    ])
    const obj = Object.fromEntries(entr)
    console.log(obj);
}

arrToObj()