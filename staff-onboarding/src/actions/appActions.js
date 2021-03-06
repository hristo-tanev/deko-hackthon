import axios from 'axios';

export function addAllCandidates(list) {
    return {
        type: 'INIT',
        payload: list
    }
}

export function getCandidates() {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'http://ec2-34-241-209-15.eu-west-1.compute.amazonaws.com:4000/candidate/',
        }).then((res) => {
            dispatch(addAllCandidates(res.data));
        }).catch(() => {
            console.log('shit');
        });
    }
}

export function addNewCandidate(candidate) {
    debugger;
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'http://ec2-34-241-209-15.eu-west-1.compute.amazonaws.com:4000/candidate/',
            data: JSON.stringify(candidate)
        }).then((res) => {
            console.log(res);
        });
    }
}