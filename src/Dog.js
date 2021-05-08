import React from "react"
import axios from "axios"

class Dog extends React.PureComponent {
  constructor(){
    super()
    this.state = {
      imgURL: "",
      //images array hold multiple images
      images:[]
    }
  }


  componentDidMount() {
    const {dogCount}= this.props
    this.getRandomImage();
  }  

  getRandomImage = async () => {
    try {
      const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random/${this.props.dogCount}`)
      this.setState({
        imgURL: data.message,
      })
    } catch (e) {
      console.log(e)
    }
  }


  render() {
    const { imgURL } = this.state;
    const styles = {
      img: {
        height: "15em"
      }
    };
    return (
      <>
        <img style={styles.img} alt="Dog" src={imgURL} />
        <button onClick={this.getRandomImage}>Load new Dog</button>
      </>
    )
  }
}

export default Dog

  