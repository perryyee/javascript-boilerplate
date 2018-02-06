import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchAsync } from '../../actions/home'



class Home extends Component {
  componentDidMount() {
    // this.props.fetchAsync();
  }
  
  render() {

    return (
        <div>
            <img src={this.props.logo} alt={this.props.company}/>
            <h1>{this.props.company} ({this.props.status})</h1>
            <p>{this.props.description}</p>
            <div>
                <p>{this.props.address.street1}</p>
                <p>{this.props.address.street2}</p>
                <p>{this.props.address.city}, {this.props.address.zipCode}</p>
                <p>{this.props.address.state}, {this.props.address.country}</p>
                <p>{this.props.address.phone}</p>
                <p>{this.props.address.url}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Round</th>
                        <th>Amount (MM)</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.funding.map(fundingRound => {
                    return <tr>
                            <td>{fundingRound.round}</td>
                            <td>{fundingRound.amount}</td>
                            <td>{fundingRound.date}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        company: state.home.company,
        description: state.home.description,
        funding: state.home.funding,
        address: state.home.address,
        logo: state.home.logo,
        url: state.home.url,
        status: state.home.status,
        isLoading: state.home.isLoading
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAsync
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)