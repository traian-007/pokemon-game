// import HeaderBlock from "./components/HeaderBlock"
// import MenuHeader from "../../components/MenuHeader"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import Footer from "../../components/Footer"

//import "./App.css"
import bg1 from "../../assets/bg1.jpg"
import bg2 from "../../assets/bg2.jpg"


const HomePage = ({ onChangePage }) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
    }
    return (
        <>

            <Header
                title="Hello every body"
                descr="Time to change the World"
                onClickButton={handleClickButton}
            >

            </Header>
            <Layout
                title="COMPONENT A"
                urlBg={bg1}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
                <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
</p>
            </Layout>

            <Layout
                title="COMPONENT B"
                colorBg={"red"}
            >
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>

            </Layout>
            <Layout
                title="COMPONENT C"
                urlBg={bg2}
            >
                <p>Description on third layout</p>
                <p>Description on third layout</p>
            </Layout>
            <Footer />

        </>
    )
}
//  <HeaderBlock title="This is new Title"
// descr="this is new description!"
// />

export default HomePage;
