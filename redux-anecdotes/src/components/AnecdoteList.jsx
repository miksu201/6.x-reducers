import { useSelector, useDispatch } from 'react-redux'
import { voteAnec } from '../reducers/anecdoteReducer'

const AnecdoteList =()=>{
    const anecdotes = useSelector(state => {
        if (state.filter == ''){
            return state.anecdotes.slice().sort((a, b) => b.votes - a.votes)
        }
        const filtState =  state.anecdotes.filter(n=>
            n.content.toLowerCase().includes(state.filter.toLowerCase())
            )
        return filtState.sort((a, b) => b.votes - a.votes)})
    
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteAnec(id))
      }

    return(
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AnecdoteList