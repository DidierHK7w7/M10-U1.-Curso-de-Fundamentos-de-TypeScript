// var _ require('loadsh');
import _ from 'lodash';

const data = [
  {
    username: 'Carl Johnson',
    role: 'admin'
  },
  {
    username: 'OG_LOC',
    role: 'rapper'
  },
  {
    username: 'Big Smoke',
    role: 'betrayer'
  },
  {
    username: 'Raider',
    role: 'mod'
  }
]

const rta = _.groupBy(data, (item) => item.role)  //agrupamiento por roles
console.log(rta);
