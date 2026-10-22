import {useSelector, useDispatch} from "react-redux"
import { addArticleAction, deleteArticleAction ,updateArticleAction} from "./redux/actions/articleActions"
import {useState} from "react"
import Formulaire from "./formulaire.jsx"
import Total from "./total.jsx"


export default function ListeArticle() {
    const listeArticles = useSelector((state)=> state.articles)
    const defaultArticle = {id:"", libelle: "", quantite: "", prix: "", disponible: ""}
    const [article, setArticle] = useState(defaultArticle)
    const dispatch = useDispatch()


    function onInputChange(e) {
        let x = e.target.name
        setArticle({...article, [x]:e.target.value})
    }

    function ajouter() {
        dispatch(addArticleAction({id: article.id, libelle: article.libelle, quantite: article.quantite, prix: article.prix, disponible: article.disponible}));
        setArticle(defaultArticle)
    }

    function addition(chosen) {
        if (!chosen ) return;
        const currentQuantite = Number(chosen.quantite)
        if (currentQuantite + 1 <= Number(chosen.disponible)) {
            dispatch(updateArticleAction({...chosen, quantite: currentQuantite + 1}))
        }
    }
    function soustraction(chosen) {
        if (!chosen ) return;
        const currentQuantite = Number(chosen.quantite);
        if (currentQuantite - 1 >= 0) {
            dispatch(updateArticleAction({ ...chosen, quantite: currentQuantite - 1 }));
        }
    }
    
    return(
        <>
         <h1>Articles</h1>
         <Total articles={listeArticles}/>
         <Formulaire article={article} fun={onInputChange} addfun={ajouter} />
         <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>libelle</th>
                    <th>quantite</th>
                    <th>prix</th>
                    <th>disponible</th>
                    <th>Actions</th>
                </tr>
               
            </thead>
            <tbody>
                {listeArticles.map(x=>{
                     const isMaxed = Number(x.quantite) === Number(x.disponible);
                    return(
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.libelle}</td>
                            <td className={isMaxed?"colored":""}>{x.quantite} </td>
                            <td>{x.prix}</td>
                            <td>{x.disponible}</td>
                            <td>
                                <button onClick={() => addition(x)}>+</button>
                                <button onClick={() => soustraction(x)}>-</button>
                                <button onClick={()=> dispatch(deleteArticleAction(x.id))}>supprimer</button>
                            </td>
                        </tr>
                    ) 
                    } 
                )}
            </tbody>
         </table>
        </>
    )}