exports.createProduct = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    res.status(201).json(
        {
            message: "Create Product Success!",
            data: {
                id: 1,
                name: name,
                price: price
            }
        }
    );
    next();
}

exports.getAllProducts = (req, res, next) => {
    res.status(200).json(
        {
            message: "Get All Product Success",
            data: [
                {
                    id: 1,
                    name: "Frisian Flag 1",
                    price: 10000
                },
                {
                    id: 2,
                    name: "Frisian Flag 2",
                    price: 10000
                },
                {
                    id: 3,
                    name: "Frisian Flag 3",
                    price: 10000
                }
            ]
        }
    );
    next();
}