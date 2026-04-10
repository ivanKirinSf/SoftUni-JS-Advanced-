function factory(library, orders){

     let res = [];

     for(let order of orders){

        let pro = Object.assign({}, order.template);

        for(let part of orders.parts){

            pro[part] = library[part];
        }

        res.push(pro);
     }

     console.log(res)

}
