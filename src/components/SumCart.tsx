import React from "react";

interface IProps {
}

interface IState {
  playOrPause?: string;
  Header?:string;
  qty?:number;

}

class SumCart extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      qty: 0
    };
  }

  render() {
    return(
      <div>
        <h1>
          <p>{this.state.Header}</p>
       
      </h1>
      </div>
    );
  }
}

export default SumCart;
