import Banner from "../Banner/Banner"
import RowPost from "../RowPost/RowPost"
import { originals, action, trending, romance, comedy, horror, documentary } from '../../urls'

function Body() {
    return (
        <div>
            <Banner url={trending} />
            <RowPost url={originals} title='Netflix Originals' />
            <RowPost url={action} title='Action' isSmall />
            <RowPost url={comedy} title='Comedy' isSmall />
            <RowPost url={romance} title='Romance' isSmall />
            <RowPost url={horror} title='Horror' isSmall />
            <RowPost url={documentary} title='Documentaries' isSmall />

        </div>
    )
}

export default Body
