import React, {Component} from "react";
import Sales from "../charts/sales";
import Revenue from "../charts/revenue";
import Clients from "../charts/clients";
import Activeusers from "../charts/Activeusers";

class Topcharts extends Component{
    render(){
        return(
            <div id='Topcharts'>
                <Sales />
                <Revenue />
                <Clients />
                <Activeusers />
            </div>
        )
    }
}
export default Topcharts;