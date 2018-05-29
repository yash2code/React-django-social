import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'
import Badge from 'material-ui/Badge'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addGrocery } from '../../actions'

class Grocery extends Component {
    render() {
        console.log('grocery props: ',this.props);
        return (
            <div className='grocery'>
                <List>
                    {this.props.grocery.map((item) => {
                        return <ListItem onClick = { () => this.props.addGrocery(item.id) }  key={item.id} primaryText={item.name} children={<div key={item.id} className='setFlex'>
                            <Badge className='grocery' badgeContent={'$'+item.cost} primary={true} badgeStyle={{ width:57, top:30 }} />
                            <Badge className='grocery' badgeContent={item.calories+'kcal'} secondary={true} badgeStyle={{ width:57, top:30  }} />
                            <Badge className='grocery' badgeContent={item.weight+'mg'} primary={true} badgeStyle={{ width:57, top:30  }} />
                        </div>} />
                    })}
                </List>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapstate: ', state);
    return {
        grocery: state.groceryItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addGrocery }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Grocery)