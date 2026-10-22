const initialState = {
    user: {id:1, username: "Amine"},
    articles: [
        {id:1, libelle: "Mouse", quantite: 3,prix: 100, disponible:10},
        {id:2, libelle: "Keyboard", quantite: 2, prix: 200, disponible: 10}
    ],
    categories: [],
    fournisseurs: []
}

function articleReducer(state = initialState , action) {
    switch(action.type) {
        case "AJOUTER_ARTICLE":
            // ajouter le code de l'ajout
            return {...state, articles: [...state.articles, action.payload]}
        case "MODIFIER_ARTICLE":
            // ajouter le code de la modification
            const articles = state.articles.map(function(article) {
                    if (article.id == parseInt(action.payload.id)) {
                        return action.payload
                    }
                    return article
            })
            return {...state, articles:articles}

        case "SUPPRIMER_ARTICLE":
            // ajouter le code de la suppression
            const articles1 = [...state.articles.filter(function(item) {
                return item.id !== action.payload
            })]
            return {...state , articles: articles1}
        
        default: 
            return state
    }
}
export default articleReducer