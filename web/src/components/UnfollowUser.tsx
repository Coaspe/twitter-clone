import { gql, useMutation } from "@apollo/client"
import { ME_QUERY } from "../pages/Profile"

const DELETE_USER_QUERY = gql`
    mutation deleteFollow($id : Int!){
        deleteFollow(id: $id){
            id
        }
    }
`

interface Props {
    id: string
}

const UnfollowUser = ({ id }: Props) => {
    const [deleteFollow] = useMutation(DELETE_USER_QUERY, {
        refetchQueries: [{query: ME_QUERY}]
    })

    const handleUnFollow = async () => {
        await deleteFollow({
            variables: {id: parseInt(id)}
        })
    }

    return (
        <div>
            <button onClick={handleUnFollow} className="edit-button">
                Unfollow
            </button>
        </div>
    )
}
export default UnfollowUser