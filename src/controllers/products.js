exports.createProduct = (req, res, next) => {
    res.json(
        {
            message: "Create Product Success!",
            data: {
                id: 1,
                name: "Frisian Flag",
                price: 10000
            }
        }
    );
    next();
}

exports.getAllProducts = (req, res, next) => {
    res.json(
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