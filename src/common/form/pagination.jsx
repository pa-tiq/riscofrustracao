import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    numeroPaginas: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
}

const defaultProps = {
    numeroPaginas:1,
    initialPage: 1,
}

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: props.initialPage, numeroPaginas: props.numeroPaginas };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.numeroPaginas !== this.state.numeroPaginas){
            this.setState({...this.state, numeroPaginas: nextProps.numeroPaginas});
        }
    }

    setPage(nPage){
        if(nPage<0 || nPage > this.state.numeroPaginas) return;
        this.setState({...this.state, currentPage: nPage});
        this.props.onChangePage(nPage);
    }

    render() {
        const {numeroPaginas, currentPage} = this.state;
        const list = [];
        for(let i=1; i<=numeroPaginas;i++) list.push(i);
 
        return (
            <ul className="pagination">
                <li className={currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(1)}>First</a>
                </li>
                <li className={currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(currentPage - 1)}>Prev</a>
                </li>
                {list.map((page, index) =>
                    <li key={index} className={currentPage === page ? 'active' : ''}>
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li className={currentPage ===  numeroPaginas ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(currentPage + 1)}>Next</a>
                </li>
                <li className={currentPage ===  numeroPaginas ? 'disabled' : ''}>
                    <a onClick={() => this.setPage( numeroPaginas)}>Last</a>
                </li>
            </ul>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;