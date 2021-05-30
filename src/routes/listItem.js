const router = require('express').Router()
const ListItem = require('../models/ListItem')

const {
    ListItemValidation
} = require('../helpers/validation');


router.get('/getAll', async (req, res) => {
    try {
        const items = {
            allItems: [],
            count: 0
        }
        const allItems = await ListItem.find()
        items.allItems = allItems,
            ListItem.countDocuments({}, function (err, count) {
                items.count = count
            })
        res.send(items)
    } catch (err) {

    }
})

router.post('/create', async (req, res) => {

    //Validation of the data
    const {
        error
    } = ListItemValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newItem = new ListItem({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    })

    try {
        await newItem.save();
        res.send({
            message: "Item Criado com sucesso!"
        });
    } catch (err) {
        res.status(400).send(err);
    }
})

router.put('/edit/:id', (req, res) => {

    //Validation of the data
    const {
        error
    } = ListItemValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    ListItem.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.send('Item atualizado com sucesso!')
    }).catch(err => {
        console.log(err.message)
    })
})

router.delete('/delete/:id', (req, res) => {

    //Validation of the data
    const {
        error
    } = ListItemValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    ListItem.findByIdAndDelete(req.params.id).then(() => {
        res.send('Item removido com sucesso!')
    }).catch(err => {
        console.log(err.message)
    })
})

module.exports = router