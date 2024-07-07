export function MemeComponent() {
    return (
<main>
    <form className="form">
    <div>
        <label htmlFor="toptext">Top Text</label>
        <input
            id="toptext"
            type="text"
            placeholder="Shut up"
            className="form--input"
        />
    </div>
    <div>
        <label htmlFor="bottomtext">Bottom Text</label>
        <input
            id="bottomtext"
            type="text"
            placeholder="and take my money"
            className="form--input"
        />
    </div>
    <button
        className="form--button"
    >
        Get a new meme image 🖼
    </button>
    </form>
</main>

    )
}