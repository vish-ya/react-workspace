import React, {useState} from 'react';
import './userCard.css';
class UserCard extends React.Component {					
  
	constructor(props){
		super(props);
		this.state={
           
            show:0,
            pageSize:10,
            items:[],
            loading:false,
            userId:"",
            
        }
	
    }
    componentDidMount(){
        fetch("https://randomuser.me/api/?results=1000")
        .then((response)=>response.json())
        .then((response)=>{
            this.setState({
                items:response.results,
                loading:true,
               
            })
    
        })
      }
    viewMore   = () => {
        this.setState((old)=>{
            return{pageSize:old.pageSize+10}
        },
        )
    }
      loadUser(item){
            this.setState({
                show:1,
                userId:item.login.uuid
            })
          console.log("Inside loadUser,,,"+item);
          
      }
	render(){
        var {items,loading}=this.state;
        if(!loading){
            return(
                <div> Loading.....</div>
            )
        }else{
            return (
            
                <div class= "row" > 
                    
                   {items.slice(0,this.state.pageSize).map(item=>(
                       <div class="column" key={item.login.uuid}>
                             
                             <img class="usr"  src={item.picture.thumbnail} alt={item.name.first} onClick={this.loadUser.bind(this,item)}/>
                        </div>
                   
                   ))}
                   <div class= "" > 
                            <button id="header-button" onClick={this.viewMore} >View More {">"}</button>
                    </div>

                    {
                        
                        items.map(item=>(
                            (this.state.userId ==item.login.uuid)?
                            <div className="containerTab" >		
                            <table id="infoTable">
                                <tr>
                                 <th colSpan={2} align="left">
                                      
                                          <h1>{item.name.title}.{  item.name.first} {  item.name.last}</h1>
                                  </th>
                                  </tr>
                                  <tr>
                                      <td ><img  id="image" src={  item.picture.medium} alt="User"    /> </td>
                                      <td class="rt">
                                           <  h3>
                                               {  item.location.city},<br/>
                                               {item.location.state},<br/>
                                               {item.location.country}
                                           </h3> </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <h3>Email</h3>
                                      </td>
                                      <td class="rt"> 
                                          <h3>{  item.email}</h3>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <h3>Phone</h3>
                                      </td>
                                      <td class="rt" align="left">
                                          <h3>{  item.phone}</h3>
                                      </td>
                                  </tr>
                              </table>
                            
                          </div>
                            :null
                        ))
        
            }
                </div>
                 
                );
        }
		
	}
}

export default UserCard;