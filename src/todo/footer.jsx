import  '../assets/styles/footer.styl';

export default {
    data() {
        return {
            autor: 'Jocky'
        }
    },

    render() {
        return (
            <div id="footer">
                <span>Written by {this.autor}</span>
            </div>
        )
    }
}