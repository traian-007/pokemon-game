

const GamePage = ({ onChangePage }) => {
    const handleClickus = () => {
        onChangePage && onChangePage('app')
    }
    return (
        <div>
            <div>
                This will be the game
        </div>
            <button onClick={handleClickus}>HomePage</button>
        </div>

    )
}
export default GamePage;