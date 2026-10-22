import {useSelector, useDispatch} from "react-redux"
import { addArticleAction, deleteArticleAction} from "./redux/actions/articleActions"


export default function Formulaire(props) {
    const {article, fun , addfun} = props
    // const dispatch = useDispatch()
    return(
        <div>
            <input type="number" placeholder="id" name="id" value={article.id} onChange={fun} min={0} max={+Infinity}/>
                 <input type="text" placeholder="libelle" name="libelle" value={article.libelle} onChange={fun}/>
                 <input type="number" placeholder="quantite" name="quantite" value={article.quantite} onChange={fun} min={1} max={+Infinity}/>
                 <input type="number" placeholder="prix" name="prix" value={article.prix} onChange={fun} min={10} max={200}/>
                 <input type="Number" placeholder="disponible" name="disponible" value={article.disponible} onChange={fun}/>
                <button onClick={addfun}>ADD</button>
        </div>
        
    )
}