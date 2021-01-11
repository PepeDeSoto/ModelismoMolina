const express = require('express');
const router = express.Router();

const pool = require('../database');


//ADD ARBOL

router.get('/addArbol',(req,res) => {
    res.render('links/addArbol');
});

router.post('/addArbol',async (req,res) => {
    
    const {title,description,date,name} = req.body;
    const new_arbol = {
        title,
        description,
        date,
        name
    };
    console.log(new_arbol);
    await pool.query('INSERT INTO ARBOL SET ?', [new_arbol]);
    res.redirect('./notas');
});


//ADD ARBUSTO

router.get('/addArbusto',(req,res) =>{
    res.render('links/addArbusto');
});

router.post('/addArbusto',async(req,res) => {
    const {title,description,hour,name} = req.body;
    const new_arbusto = {
        title,
        description,
        hour,
        name
    }

    console.log(new_arbusto);
    await pool.query('INSERT INTO ARBUSTO SET ?', [new_arbusto]);
    res.redirect('./notas');
})

router.get('/addNote', (req,res) =>{
    res.render('links/addNote');
});

router.get('/notas',async(req,res)=>{
    const arbol = await pool.query('Select * FROM ARBOL,ALMACEN WHERE NAME = ID_NAME');
    const arbusto = await pool.query('Select * FROM ARBUSTO,ALMACEN WHERE NAME = ID_NAME');
    //INTENTO DE CREAR UN NUEVO ARREGLO CON LAS CONSULTAS
    // const notas = []
    // console.log(arbol);
    // for(let i = 0; i < arbol.legth;i++){
    //    arbol[i] await pool.query('SELECT images FROM almacen WHERE ? = id_name',[arbol[i].name]);
    // }
    // const name = await pool.query('SELECT images FROM almacen WHERE ? = id_name',[arbol[0].name]);
    console.log(arbol);
    res.render('./links/notas',{arbol});
});

router.get('/delete/:id',async(req,res)=>{
    const id_nota = req.params.id;
    await pool.query('DELETE FROM arbol WHERE ID_ARBOL = ?',[id_nota]);
    res.redirect('/links/notas');
});

router.get('/edit/:id', async(req,res) =>{
    const id_arbol = req.params.id;
    const arbol = await pool.query('SELECT * FROM arbol WHERE ID_ARBOL = ?',[id_arbol]);
    res.render('./links/editArbol',{arbol:arbol[0]});
});

router.post('/edit/:id',async(req,res)=>{
    const {id} = req.params;
    const {title,description,date,name} = req.body;
    console.log(id)
    const newArbol = {
        title,
        description,
        date,
        name
    }
    await pool.query('UPDATE arbol SET ? WHERE id_arbol = ?',[newArbol,id]);
    res.redirect('/links/notas');
});

router.get('/garden', (req,res) =>{
    res.render('links/garden');
});
router.get('/',(req,res) =>{
    res.render('links/pageIndex')
});

//LINKS VIEJOS BBDD


// router.get('/garden', (req,res) =>{
//     res.render('links/garden');
// });
// router.get('/',(req,res) =>{
//     res.render('links/pageIndex')
// });


// router.get('/edit/:id', async(req,res) =>{
//     const id_nota = req.params.id;
//     const nota = await pool.query('SELECT * FROM nota WHERE ID_NOTA = ?',[id_nota]);
//     res.render('./links/editNote',{nota:nota[0]});
// });

// router.post('/edit/:id',async(req,res)=>{
//     const {id} = req.params;
//     const {title,description,date,type} = req.body;
//     console.log(id)
//     const newNote = {
//         title,
//         description,
//         date,
//         type
//     }
//     await pool.query('UPDATE nota SET ? WHERE id_nota = ?',[newNote,id]);
//     res.redirect('/links/notas');
// });

module.exports = router;