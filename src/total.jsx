import {useSelector, useDispatch} from "react-redux"
import { addArticleAction, deleteArticleAction} from "./redux/actions/articleActions"
export default function Total(props) {
    const {articles} = props
    let total = 0;
    articles.forEach(x=> total += parseInt(x.prix))
    return(
        <p>Total: {total}</p>
    )
}