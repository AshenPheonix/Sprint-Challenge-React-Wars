import React,{Component} from 'react'

export default class Film extends Component {
    constructor(props){
        super(props)
        this.state={
            film:null
        }
    }

    componentDidMount(){
        this.getFilm(this.props.filmURL)
    }

    getFilm = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.setState({film:data.title})
          })
          .catch(err => {
            throw new Error(err);
          });
      };

    render(){
        let string="Loading Data"
        if(this.state.film){
            string=this.state.film
        }
        return (
            <li>
                {string}
            </li>
        )
    }
}