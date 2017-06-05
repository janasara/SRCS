import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions/searchActions';
import SearchList from './SearchList';

class SearchPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state={
      search:props.search,
      searches:props.searches,
      errchk:{},
      showerr:false
    };
   
   this.NewSearch=this.NewSearch.bind(this);
   this.SearchChange=this.SearchChange.bind(this);
   this.ClearData=this.ClearData.bind(this);


  }

ClearData(){
  let errchk = {};
  this.setState({ errchk: errchk });
  let search='';
  this.setState({ search: search });
  let showerr=false;
  this.setState({ showerr: showerr});
  this.props.actions.loadNewSearches("zzz")
        .then(() => this.context.router.push('/search'))
        .catch(error => {
        error(error);
    
      });

}

SearchFormIsValid() {
    let formIsValid = true;
    let errchk = {};
    let showerr=false;

    if (this.state.search.length > 50) {
      errchk = 'Invalid serach';
      formIsValid = false;
    }
    if (!this.chkBadChar(this.state.search)) {
      errchk = 'Invalid search';
      formIsValid = false;
      showerr=true;
      
    }
    this.setState({ errchk: errchk });
    this.setState({ showerr: showerr });
    return formIsValid;
}

chkBadChar(svalue) {
  return (/^[A-z]+$/.test(svalue));

}

NewSearch(){

    let search=this.state.search;

    
    if (search)
    {      
       if (!this.SearchFormIsValid()) {
          return;
      }
      this.props.actions.loadNewSearches(search)
        .then(() => this.context.router.push('/search'))
        .catch(error => {
        error(error);
    
      });
    } else {
      this.props.actions.loadSearches()
        .then(() => this.context.router.push('/search'))
        .catch(error => {
        error(error);
    
        });      
     
      } 
    } 


SearchChange(event){
    let search = this.state.search;
    search = event.target.value;
    return this.setState({ search: search });

}

  render() {
    let data= this.state;
    
    return (
         
        <div>
     
          <div className="telement melement">  
         <div className="telementl" >       
        <input
          type="text"
          name="country"
          className="form-control"         
          value={data.search}
          onChange={this.SearchChange}
          />
          </div>
          <div className="telementn" > 
        <input type="button" value="Search" className="btn btn-primary bbtn  " onClick={this.NewSearch} />
        <input type="button" value="Clear" className="btn btn-primary bbtn  " onClick={this.ClearData} />
        
        
        </div>
        
        </div>
        {this.state.showerr && <div className="alert alert-danger telementrl">{this.state.errchk}</div>}
        <SearchList searches={this.props.searches} />
      </div>
    );
  }

}

SearchPage.propTypes = {
  searches: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  search:PropTypes.string.isRequired
};

SearchPage.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state) {
  const search=state.search;
  let searches=state.searches;
  return {
    search:search,
    searches:searches,
    showerr: false
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
