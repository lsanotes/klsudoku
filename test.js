var klsudoku = require('./build/Release/klsudoku');
if (false) {
  // console.log(klsudoku);
  let puzzles = [
    '000000000530000000000008702000900000000000050008007010907000100000040000000350060',
    '000012034000056078000000000000000000410000085290000067000000000120039000980047000',
  ];
  for(let i=0;i<puzzles.length;i++){
    console.log(klsudoku.solve(puzzles[i]));
  }

  for(let i=0;i<10;i++){
    const {puzzle, solution} = klsudoku.generate();
    console.log(`${puzzle} => ${solution}`);
  }

  // multi test:
  const pszmulti = '000000000000000000000000000000900000000000050008007010907000100000040000000350060';
  console.log(klsudoku.solve(pszmulti));
  console.log(klsudoku.solutioncount(pszmulti));

  const pszvalid = '000000000530000000000008702000900000000000050008007010907000100000040000000350060';
  console.log(klsudoku.solve(pszvalid));
  console.log(klsudoku.solutioncount(pszvalid));

  const psznotvalid = '110000000530000000000008702000900000000000050008007010907000100000040000000350060';
  console.log(klsudoku.solve(psznotvalid));
  console.log(klsudoku.solutioncount(psznotvalid));
}

// if(true) { // hints test
//   // get hints
//   const pszvalid = '000000000530000000000008702000900000000000050008007010907000100000040000000350060';
//   let ret = klsudoku.gethints(pszvalid, pszvalid, 1, '');
//   console.log(ret);
//   try {
//     const acts = JSON.parse(ret.acts[0]);
//     console.log(acts);
//   } catch(e) {
//     console.log(e);
//   }

//   const pzhints2 = '512374060600250407470000205067425000200607054054000672825100740340702580790548020';
//   ret = klsudoku.gethints(pzhints2, pzhints2, 1, '');
//   console.log(ret);
//   try {
//     const acts = JSON.parse(ret.acts[0]);
//     console.log(acts);
//   } catch(e) {
//     console.log(e);
//   }
// }

// if(true) {
//   let out=[];
//   for(let i=0;i<30;i++) {
//     const sname = klsudoku.solvername(i);
//     out.push(`'${sname}'`);
//   }
//   console.log(out.join(','));
// }

// const candslist=[[],[1,2,7,8],[1,3,7,8,9],[1],[1,2,3,7],[1,2,3,7],[],[],[1,2,7,8,9],[3,4,5,7],[1,2,4,5,7],[1,2,3,4,5,7],[],[1,2,3,6,7],[],[1,2,3,6,7],[2,3,6,7],[1,2,6,7],[3,4,5,7,9],[1,2,4,5,7,8],[1,2,3,4,5,7,8,9],[1,3,4,5,6],[1,2,3,6,7],[1,2,3,4,5,6,7],[1,2,3,6,7,8],[2,3,6,7,8,9],[1,2,6,7,8,9],[],[4,6],[3,4,6,9],[],[],[2,3,4,6,8],[2,6,8],[2,4,6,8],[2,4,6,8],[],[4,5,6,7],[4,5,6,7,9],[1,4,6,9],[1,2,6,9],[1,2,4,6],[1,2,5,6,7],[2,4,6,7],[],[],[4,5,6,7],[3,4,5,6,7],[1,3,4,6],[1,3,6,8],[1,3,4,6,8],[],[4,6,7,8],[1,4,5,6,7,8],[4,5,7],[4,5,6,7,8],[4,5,6,7,8],[],[3,6,7,8,9],[3,5,6,7,8],[3,5,6,7,8],[],[4,5,6,7,8,9],[5,7],[],[1,2,5,6,7,8],[1,3,5,6],[],[1,3,5,6,7,8],[2,3,5,6,7,8],[2,3,6,7,8],[2,5,6,7,8],[4,5,7],[],[1,2,4,5,6,7,8],[1,5,6,9],[1,6,7,8,9],[1,5,6,7,8],[2,5,6,7,8],[2,4,6,7,8,9],[2,4,5,6,7,8,9]];
// console.log(candslist);
// let strcands =(candslist.map(cands=>{
//   return cands.join(',');
// })).join(';');
// console.log(strcands);
// let candslist2 = strcands.split(';');
// candslist2 = candslist2.map((cands)=>{
//   if(cands.length<1) {
//     return [];
//   }
//   let cl = cands.split(',');
//   return cl.map(c=>Number(c));
// });
// console.log(candslist2);

const strallcands = ';1,2,7,8;1,3,7,8,9;1;1,2,3,7;1,2,3,7;;;1,2,7,8,9;3,4,5,7;1,2,4,5,7;1,2,3,4,5,7;;1,2,3,6,7;;1,2,3,6,7;2,3,6,7;1,2,6,7;3,4,5,7,9;1,2,4,5,7,8;1,2,3,4,5,7,8,9;1,3,4,5,6;1,2,3,6,7;1,2,3,4,5,6,7;1,2,3,6,7,8;2,3,6,7,8,9;1,2,6,7,8,9;;4,6;3,4,6,9;;;2,3,4,6,8;2,6,8;2,4,6,8;2,4,6,8;;4,5,6,7;4,5,6,7,9;1,4,6,9;1,2,6,9;1,2,4,6;1,2,5,6,7;2,4,6,7;;;4,5,6,7;3,4,5,6,7;1,3,4,6;1,3,6,8;1,3,4,6,8;;4,6,7,8;1,4,5,6,7,8;4,5,7;4,5,6,7,8;4,5,6,7,8;;3,6,7,8,9;3,5,6,7,8;3,5,6,7,8;;4,5,6,7,8,9;5,7;;1,2,5,6,7,8;1,3,5,6;;1,3,5,6,7,8;2,3,5,6,7,8;2,3,6,7,8;2,5,6,7,8;4,5,7;;1,2,4,5,6,7,8;1,5,6,9;1,6,7,8,9;1,5,6,7,8;2,5,6,7,8;2,4,6,7,8,9;2,4,5,6,7,8,9';
const strpz = '600000450000809000000000000100750000800000003200000900000200010090040000030000000';
const strcurpsz = strpz;

let ret = klsudoku.gethints(strpz, strcurpsz, 1, strallcands);
  console.log(ret);