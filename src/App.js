import './App.css';
import React from "react";
import ReactDOM from "react-dom";

class Chess extends React.Component {
  z = 0;
  arr = [];
  sarr_black = ['♚', '♛', '♜', '♝', '♞', '♟'];
  sarr_white = ['♔', '♕', '♖', '♗', '♘', '♙'];
  goticode = '';
  idd = '';
  index = 0;
  arr2 = [];
  turn = 'white';
  kig = '';
  dis = true;
  vr = 0;

  constructor(props) {
    super(props);
    console.log(window.innerHeight)

  }

  checkking = (id) => {
    for (let o = 0; o <= 63; o++) {
      if (document.getElementsByClassName('icon')[o].style.border == '1px solid blue') {
        let ikd = document.getElementsByClassName('icon')[o].id;
        let u = document.getElementById(ikd).innerHTML;
        document.getElementById(ikd).innerHTML = document.getElementById(id).innerHTML;
        document.getElementById(id).innerHTML = '';
        this.check(id);

        if (document.getElementById(ikd).style.border == '1px solid green') {
          document.getElementById(ikd).style.border = "1px solid black";
          document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
          document.getElementById(ikd).innerHTML = u;
        }
        else {
          document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
          document.getElementById(ikd).innerHTML = u;
        }
      }

    }
  }


  checkdanger = (id) => {

    for (var d = 0; d <= 63; d++) {
      if (document.getElementsByClassName('icon')[d].innerHTML == '♔' || document.getElementsByClassName('icon')[d].innerHTML == '♚') {
        if (this.arr.includes(document.getElementsByClassName('icon')[d].innerHTML)) {
          for (var o = 0; o <= 63; o++) {
            if (document.getElementsByClassName('icon')[o].style.border == '1px solid blue' || document.getElementsByClassName('icon')[o].style.border == '1px solid red') {
              var ikd = document.getElementsByClassName('icon')[o].id;
              var previouscoin = document.getElementById(ikd).innerHTML;
              // if(document.getElementById(ikd).innerHTML == ''){
              document.getElementById(ikd).innerHTML = document.getElementById(id).innerHTML;
              document.getElementById(id).innerHTML = '';
              this.check();
              if (document.getElementsByClassName('icon')[d].style.border == '1px solid green') {
                console.log('called');
                document.getElementById(ikd).style.border = "1px solid black";
                document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
                document.getElementById(ikd).innerHTML = previouscoin;
              }
              else {
                document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
                document.getElementById(ikd).innerHTML = previouscoin;
              }

            }
          }
        }
      }
    }
    for (let i = 1; i <= 63; i++) {
      if (this.arr.includes(document.getElementsByClassName('icon')[i].innerHTML)) {
        if ((document.getElementsByClassName('icon')[i].innerHTML == '♔' || document.getElementsByClassName('icon')[i].innerHTML == '♚') && document.getElementsByClassName('icon')[i].style.border == '1px solid green')
          document.getElementsByClassName('icon')[i].style.border = "1px solid black";
        // console.log('yes');
      }
    }
  }


  king_bishop = (pawn_id) => {
    if (this.sarr_black.includes(document.getElementById(pawn_id).innerHTML)) {
      this.arr2 = this.sarr_black;
      this.kig = '♔';
    }
    else if (this.sarr_white.includes(document.getElementById(pawn_id).innerHTML)) {
      this.arr2 = this.sarr_white;
      this.kig = '♚';
    }
    let new_id = pawn_id;
    let new_id11 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) + 1}`;
    let new_id12 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) - 1}`;
    let new_id21 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) + 1}`;
    let new_id22 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) - 1}`;

    if (document.getElementById(new_id11) != undefined && (document.getElementById(new_id11).innerHTML == this.kig)) {
      document.getElementById(new_id11).style.border = '1px solid green';
      this.z++;
    }
    if (document.getElementById(new_id12) != undefined && (document.getElementById(new_id12).innerHTML == this.kig)) {
      document.getElementById(new_id12).style.border = '1px solid green';
      this.z++;

    }
    if (document.getElementById(new_id21) != undefined && (document.getElementById(new_id21).innerHTML == this.kig)) {
      document.getElementById(new_id21).style.border = '1px solid green';
      this.z++;

    }
    if (document.getElementById(new_id22) != undefined && (document.getElementById(new_id22).innerHTML == this.kig)) {
      document.getElementById(new_id22).style.border = '1px solid green';
      this.z++;

    }

    while ((parseInt(new_id11[1]) <= 8 && document.getElementById(new_id11) != undefined && document.getElementById(new_id11).innerHTML == '')) {
      if ((document.getElementById(new_id11).innerHTML == this.kig)) {
        document.getElementById(new_id11).style.border = '1px solid green';
        // this.setState({ vr: 1 });
        this.z++;

      }
      new_id11 = `r${parseInt(new_id11[1]) + 1}icon${parseInt(new_id11[6]) + 1}`;
      if (document.getElementById(new_id11) != undefined && (document.getElementById(new_id11).innerHTML == this.kig)) {
        document.getElementById(new_id11).style.border = '1px solid green';
        // this.setState({ vr: 1 });
        this.z++;

      }
    }

    while ((parseInt(new_id12[1]) >= 1 && document.getElementById(new_id12) != undefined && document.getElementById(new_id12).innerHTML == '')) {
      if ((document.getElementById(new_id12).innerHTML == this.kig)) {
        document.getElementById(new_id12).style.border = '1px solid green';
        // this.setState({ vr: 1 });
        this.z++;

      }
      new_id12 = `r${parseInt(new_id12[1]) - 1}icon${parseInt(new_id12[6]) - 1}`;
      if (document.getElementById(new_id12) != undefined && (document.getElementById(new_id12).innerHTML == this.kig)) {
        document.getElementById(new_id12).style.border = '1px solid green';
        // this.setState({ vr: 1 });
        this.z++;

      }
    }

    while ((parseInt(new_id21[6]) >= 1 && document.getElementById(new_id21) != undefined && document.getElementById(new_id21).innerHTML == '')) {
      if ((document.getElementById(new_id21).innerHTML == this.kig)) {
        document.getElementById(new_id21).style.border = '1px solid green';
        // this.setState({ vr: 1 });
        this.z++;

      }
      new_id21 = `r${parseInt(new_id21[1]) - 1}icon${parseInt(new_id21[6]) + 1}`;
      if (document.getElementById(new_id21) != undefined && (document.getElementById(new_id21).innerHTML == this.kig)) {
        document.getElementById(new_id21).style.border = '1px solid green';
        // this.setState({ vr: 1 });
        this.z++;
      }
    }

    while (parseInt(new_id22[6]) <= 8 && document.getElementById(new_id22) != undefined && (document.getElementById(new_id22).innerHTML == '')) {
      if ((document.getElementById(new_id22).innerHTML == this.kig)) {
        document.getElementById(new_id22).style.border = '1px solid green';
        // this.setState({ vr: 1 });
        this.z++;

      }
      new_id22 = `r${parseInt(new_id22[1]) + 1}icon${parseInt(new_id22[6]) - 1}`;
      if (document.getElementById(new_id22) != undefined && (document.getElementById(new_id22).innerHTML == this.kig)) {
        document.getElementById(new_id22).style.border = '1px solid green';
        // this.setState({ vr: 1 });
        this.z++;

      }
    }
    if (this.z == 0) {
      for (let i = 0; i <= 63; i++) {
        if ((document.getElementsByClassName('icon')[i].innerHTML == this.kig) && document.getElementsByClassName('icon')[i].style.border == '1px solid green') {
          document.getElementsByClassName('icon')[i].style.border = "1px solid black";
        }
      }
    }
  }


  king_rook = (pawn_id) => {

    if (this.sarr_black.includes(document.getElementById(pawn_id).innerHTML)) {
      this.arr2 = this.sarr_black;
      this.kig = '♔';
    }
    else if (this.sarr_white.includes(document.getElementById(pawn_id).innerHTML)) {
      this.arr2 = this.sarr_white;
      this.kig = '♚';
    }
    let new_id = pawn_id;
    let new_id11 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6])}`;
    let new_id12 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6])}`;
    let new_id21 = `r${parseInt(new_id[1])}icon${parseInt(new_id[6]) - 1}`;
    let new_id22 = `r${parseInt(new_id[1])}icon${parseInt(new_id[6]) + 1}`;

    if (document.getElementById(new_id11) != undefined && (document.getElementById(new_id11).innerHTML == this.kig)) {
      document.getElementById(new_id11).style.border = '1px solid green';
      this.z++;
    }
    if (document.getElementById(new_id12) != undefined && (document.getElementById(new_id12).innerHTML == this.kig)) {
      document.getElementById(new_id12).style.border = '1px solid green';
      this.z++;
    }
    if (document.getElementById(new_id21) != undefined && (document.getElementById(new_id21).innerHTML == this.kig)) {
      document.getElementById(new_id21).style.border = '1px solid green';
      this.z++;
    }
    if (document.getElementById(new_id22) != undefined && (document.getElementById(new_id22).innerHTML == this.kig)) {
      document.getElementById(new_id22).style.border = '1px solid green';
      this.z++;
    }

    while ((parseInt(new_id11[1]) <= 8 && document.getElementById(new_id11).innerHTML == '')) {
      if ((document.getElementById(new_id11).innerHTML == this.kig)) {
        document.getElementById(new_id11).style.border = '1px solid green';
        this.z++;
      }
      new_id11 = `r${parseInt(new_id11[1]) + 1}icon${parseInt(new_id11[6])}`;
      if (document.getElementById(new_id11) != undefined && (document.getElementById(new_id11).innerHTML == this.kig)) {
        document.getElementById(new_id11).style.border = '1px solid green';
        this.z++;
      }
    }

    while ((parseInt(new_id12[1]) >= 1 && document.getElementById(new_id12).innerHTML == '')) {
      if ((document.getElementById(new_id12).innerHTML == this.kig)) {
        document.getElementById(new_id12).style.border = '1px solid green';
        this.z++;
      }
      new_id12 = `r${parseInt(new_id12[1]) - 1}icon${parseInt(new_id12[6])}`;
      if (document.getElementById(new_id12) != undefined && (document.getElementById(new_id12).innerHTML == this.kig)) {
        document.getElementById(new_id12).style.border = '1px solid green';
        this.z++;
      }
    }

    while ((parseInt(new_id21[6]) >= 1 && (document.getElementById(new_id21).innerHTML == ''))) {
      if ((document.getElementById(new_id21).innerHTML == this.kig)) {
        document.getElementById(new_id21).style.border = '1px solid green';
        this.z++;
      }
      new_id21 = `r${parseInt(new_id21[1])}icon${parseInt(new_id21[6]) - 1}`;
      if (document.getElementById(new_id21) != undefined && (document.getElementById(new_id21).innerHTML == this.kig)) {
        document.getElementById(new_id21).style.border = '1px solid green';
        this.z++;
      }
    }

    while (parseInt(new_id22[6]) <= 8 && (document.getElementById(new_id22).innerHTML == '')) {
      if ((document.getElementById(new_id22).innerHTML == this.kig)) {
        document.getElementById(new_id22).style.border = '1px solid green';
        this.z++;
      }
      new_id22 = `r${parseInt(new_id22[1])}icon${parseInt(new_id22[6]) + 1}`;
      if (document.getElementById(new_id22) != undefined && (document.getElementById(new_id22).innerHTML == this.kig)) {
        document.getElementById(new_id22).style.border = '1px solid green';
        this.z++;
      }
    }
    if (this.z == 0) {
      for (let i = 0; i <= 63; i++) {
        if ((document.getElementsByClassName('icon')[i].innerHTML == this.kig) && document.getElementsByClassName('icon')[i].style.border == '1px solid green') {
          document.getElementsByClassName('icon')[i].style.border = "1px solid black";
        }
      }
    }
  }


  king_knight = (pawn_id) => {
    if (this.sarr_black.includes(document.getElementById(pawn_id).innerHTML)) {
      this.arr2 = this.sarr_black;
      this.kig = '♔'
    }
    else if (this.sarr_white.includes(document.getElementById(pawn_id).innerHTML)) {
      this.arr2 = this.sarr_white;
      this.kig = '♚'
    }
    let new_id = pawn_id;
    let new_id13 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) - 2}`;
    let new_id14 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) - 2}`;
    let new_id23 = `r${parseInt(new_id[1]) - 2}icon${parseInt(new_id[6]) + 1}`;
    let new_id24 = `r${parseInt(new_id[1]) - 2}icon${parseInt(new_id[6]) - 1}`;
    let new_id33 = `r${parseInt(new_id[1]) + 2}icon${parseInt(new_id[6]) + 1}`;
    let new_id34 = `r${parseInt(new_id[1]) + 2}icon${parseInt(new_id[6]) - 1}`;
    let new_id43 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) + 2}`;
    let new_id44 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) + 2}`;

    if (document.getElementById(new_id13) != undefined && this.arr2.includes(document.getElementById(new_id13).innerHTML) != true) {
      if ((document.getElementById(new_id13).innerHTML == this.kig)) {
        document.getElementById(new_id13).style.border = '1px solid green';
        this.z++;
      }
    }
    if (document.getElementById(new_id14) != undefined && this.arr2.includes(document.getElementById(new_id14).innerHTML) != true) {
      if ((document.getElementById(new_id14).innerHTML == this.kig)) {
        document.getElementById(new_id14).style.border = '1px solid green';
        this.z++;
      }
    }
    if (document.getElementById(new_id23) != undefined && this.arr2.includes(document.getElementById(new_id23).innerHTML) != true) {
      if ((document.getElementById(new_id23).innerHTML == this.kig)) {
        document.getElementById(new_id23).style.border = '1px solid green';
        this.z++;
      }
    }
    if (document.getElementById(new_id24) != undefined && this.arr2.includes(document.getElementById(new_id24).innerHTML) != true) {
      if ((document.getElementById(new_id24).innerHTML == this.kig)) {
        document.getElementById(new_id24).style.border = '1px solid green';
        this.z++;
      }
    }
    if (document.getElementById(new_id33) != undefined && this.arr2.includes(document.getElementById(new_id33).innerHTML) != true) {
      if ((document.getElementById(new_id33).innerHTML == this.kig)) {
        document.getElementById(new_id33).style.border = '1px solid green';
        this.z++;
      }
    }
    if (document.getElementById(new_id34) != undefined && this.arr2.includes(document.getElementById(new_id34).innerHTML) != true) {
      if ((document.getElementById(new_id34).innerHTML == this.kig)) {
        document.getElementById(new_id34).style.border = '1px solid green';
        this.z++;
      }
    }
    if (document.getElementById(new_id43) != undefined && this.arr2.includes(document.getElementById(new_id43).innerHTML) != true) {
      if ((document.getElementById(new_id43).innerHTML == this.kig)) {
        document.getElementById(new_id43).style.border = '1px solid green';
        this.z++;
      }
    }
    if (document.getElementById(new_id44) != undefined && this.arr2.includes(document.getElementById(new_id44).innerHTML) != true) {
      if ((document.getElementById(new_id44).innerHTML == this.kig)) {
        document.getElementById(new_id44).style.border = "1px solid green";
        this.z++;
      }
    }
    if (this.z == 0) {
      for (let i = 0; i <= 63; i++) {
        if ((document.getElementsByClassName('icon')[i].innerHTML == this.kig) && document.getElementsByClassName('icon')[i].style.border == '1px solid green') {
          document.getElementsByClassName('icon')[i].style.border = "1px solid black";
        }
      }
    }
  }


  king_white_pawn = (pawn_id) => {
    let new_id = pawn_id;
    let new_id11 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) + 1}`;
    let new_id12 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) - 1}`;

    if (parseInt(new_id[6]) < 8) {

      if (this.sarr_black.includes(document.getElementById(new_id11).innerHTML) && document.getElementById(new_id11).innerHTML == '♚') {
        (document.getElementById(new_id11).style.border = '1px solid green');
        this.z++;
      }
    }
    if (parseInt(new_id[6]) > 1) {
      if (this.sarr_black.includes(document.getElementById(new_id12).innerHTML) && document.getElementById(new_id12).innerHTML == '♚') {
        document.getElementById(new_id12).style.border = '1px solid green'
        this.z++;
      }
    }
    if (this.z == 0) {
      for (let i = 0; i <= 63; i++) {
        if (this.arr.includes(document.getElementsByClassName('icon')[i].innerHTML) == false && (document.getElementsByClassName('icon')[i].innerHTML == '♚' || document.getElementsByClassName('icon')[i].innerHTML == '♔') && document.getElementsByClassName('icon')[i].style.border == '1px solid green') {
          document.getElementsByClassName('icon')[i].style.border = "1px solid black";
        }
      }
    }
  }


  king_black_pawn = (pawn_id) => {
    // let z = 0;
    let new_id = pawn_id;
    let new_id11 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) + 1}`;
    let new_id12 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) - 1}`;

    if (parseInt(new_id[6]) < 8) {
      if (this.sarr_white.includes(document.getElementById(new_id11).innerHTML) && document.getElementById(new_id11).innerHTML == '♔') {
        document.getElementById(new_id11).style.border = '1px solid green';
        this.z++;
      }
    }
    if (parseInt(new_id[6]) > 1) {
      if (this.sarr_white.includes(document.getElementById(new_id12).innerHTML) && document.getElementById(new_id12).innerHTML == '♔') {
        document.getElementById(new_id12).style.border = '1px solid green';
        this.z++;
      }
    }

    if (this.z == 0) {
      for (let i = 0; i <= 63; i++) {
        if (this.arr.includes(document.getElementsByClassName('icon')[i].innerHTML) == false && (document.getElementsByClassName('icon')[i].innerHTML == '♚' || document.getElementsByClassName('icon')[i].innerHTML == '♔') && document.getElementsByClassName('icon')[i].style.border == '1px solid green') {
          document.getElementsByClassName('icon')[i].style.border = "1px solid black";
        }
      }
    }

  }
  mate = (pawn_id) => {
    let new_id = pawn_id;
    let new_id11 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) + 1}`;
    let new_id12 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) - 1}`;
    let new_id21 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) + 1}`;
    let new_id22 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) - 1}`;
    let new_id13 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6])}`;
    let new_id14 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6])}`;
    let new_id23 = `r${parseInt(new_id[1])}icon${parseInt(new_id[6]) - 1}`;
    let new_id24 = `r${parseInt(new_id[1])}icon${parseInt(new_id[6]) + 1}`;

    if (document.getElementById(new_id).style.border = '1px solid green') {
      let gh1 = 0;
      let gh2 = 0;
      // let gh9=0;
      if (document.getElementById(new_id11) != undefined && this.arr.includes(document.getElementById(new_id11).innerHTML) == false) {
        gh1++;
        let u = document.getElementById(new_id11).innerHTML;
        document.getElementById(new_id11).innerHTML = document.getElementById(new_id).innerHTML;
        this.check();
        // if (this.arr2.includes(document.getElementById(new_id11).innerHTML)==false && document.getElementById(new_id11).innerHTML != '') {
        //   gh2++
        // }
        if (document.getElementById(new_id11).style.border == '1px solid green') {
          gh2++;
        }
        document.getElementById(new_id11).style.border = "1px solid black";
        document.getElementById(new_id11).innerHTML = u;
      }
      if (document.getElementById(new_id12) != undefined && this.arr.includes(document.getElementById(new_id12).innerHTML) == false) {
        gh1++;
        let u = document.getElementById(new_id12).innerHTML;
        document.getElementById(new_id12).innerHTML = document.getElementById(new_id).innerHTML;
        this.check();
        // if (this.arr2.includes(document.getElementById(new_id12).innerHTML)==false && document.getElementById(new_id12).innerHTML != '') {
        //   gh2++
        // }
        if (document.getElementById(new_id12).style.border == '1px solid green') {
          gh2++;
        }
        document.getElementById(new_id12).style.border = "1px solid black";
        document.getElementById(new_id12).innerHTML = u;
      }
      if (document.getElementById(new_id21) != undefined && this.arr.includes(document.getElementById(new_id21).innerHTML) == false) {
        gh1++;
        let u = document.getElementById(new_id21).innerHTML;
        document.getElementById(new_id21).innerHTML = document.getElementById(new_id).innerHTML;
        this.check();
        // if (this.arr2.includes(document.getElementById(new_id21).innerHTML)==false && document.getElementById(new_id21).innerHTML != '') {
        //   gh2++
        // }
        if (document.getElementById(new_id21).style.border == '1px solid green') {
          gh2++;
        }
        document.getElementById(new_id21).style.border = "1px solid black";
        document.getElementById(new_id21).innerHTML = u;
      }
      if (document.getElementById(new_id22) != undefined && this.arr.includes(document.getElementById(new_id22).innerHTML) == false) {
        gh1++;
        let u = document.getElementById(new_id22).innerHTML;
        document.getElementById(new_id22).innerHTML = document.getElementById(new_id).innerHTML;
        this.check();
        // if (this.arr2.includes(document.getElementById(new_id22).innerHTML)==false && document.getElementById(new_id22).innerHTML != '') {
        //   gh2++
        // }
        if (document.getElementById(new_id22).style.border == '1px solid green') {
          gh2++;
        }
        document.getElementById(new_id22).style.border = "1px solid black";
        document.getElementById(new_id22).innerHTML = u;
      }
      if (document.getElementById(new_id13) != undefined && this.arr.includes(document.getElementById(new_id13).innerHTML) == false) {
        gh1++;
        let u = document.getElementById(new_id13).innerHTML;
        document.getElementById(new_id13).innerHTML = document.getElementById(new_id).innerHTML;
        this.check();
        // if (this.arr2.includes(document.getElementById(new_id13).innerHTML)==false && document.getElementById(new_id13).innerHTML != '') {
        //   gh2++
        // }
        if (document.getElementById(new_id13).style.border == '1px solid green') {
          gh2++;
        }
        document.getElementById(new_id13).style.border = "1px solid black";
        document.getElementById(new_id13).innerHTML = u;
      }
      if (document.getElementById(new_id14) != undefined && this.arr.includes(document.getElementById(new_id14).innerHTML) == false) {
        gh1++;
        let u = document.getElementById(new_id14).innerHTML;
        document.getElementById(new_id14).innerHTML = document.getElementById(new_id).innerHTML;
        this.check();
        // if (this.arr2.includes(document.getElementById(new_id14).innerHTML)==false && document.getElementById(new_id14).innerHTML != '') {
        //   gh2++
        // }
        if (document.getElementById(new_id14).style.border == '1px solid green') {
          gh2++;
        }
        document.getElementById(new_id14).style.border = "1px solid black";
        document.getElementById(new_id14).innerHTML = u;
      }
      if (document.getElementById(new_id23) != undefined && this.arr.includes(document.getElementById(new_id23).innerHTML) == false) {
        gh1++;
        let u = document.getElementById(new_id23).innerHTML;
        document.getElementById(new_id23).innerHTML = document.getElementById(new_id).innerHTML;
        this.check();
        // if (this.arr2.includes(document.getElementById(new_id23).innerHTML)==false && document.getElementById(new_id23).innerHTML != '') {
        //   gh2++
        // }
        if (document.getElementById(new_id23).style.border == '1px solid green') {
          gh2++;
        }
        document.getElementById(new_id23).style.border = "1px solid black";
        document.getElementById(new_id23).innerHTML = u;
      }
      if (document.getElementById(new_id24) != undefined && this.arr.includes(document.getElementById(new_id24).innerHTML) == false) {
        gh1++;
        let u = document.getElementById(new_id24).innerHTML;
        document.getElementById(new_id24).innerHTML = document.getElementById(new_id).innerHTML;
        this.check();
        // if (this.arr2.includes(document.getElementById(new_id24).innerHTML)==false && document.getElementById(new_id24).innerHTML != '') {
        //   gh2++
        // }
        if (document.getElementById(new_id24).style.border == '1px solid green') {
          gh2++;
        }
        document.getElementById(new_id24).style.border = "1px solid black";
        document.getElementById(new_id24).innerHTML = u;
      }
      let ghy = 0;
      // console.log(gh1, gh2);
      for (let i = 0; i <= 63; i++) {
        if (document.getElementsByClassName('icon')[i].style.border == '1px solid red' || document.getElementsByClassName('icon')[i].style.border == '1px solid blue') {
          ghy++;
          document.getElementsByClassName('icon')[i].style.border = "1px solid black";
        }
      }
      if ((gh1 > 0) && (gh1 == gh2 || gh1 - 1 == gh2)) {
        if (document.getElementById(pawn_id).innerHTML == '♚' && this.turn == 'white' && ghy == 0) {
          window.alert('game over');
        }
        if (document.getElementById(pawn_id).innerHTML == '♔' && this.turn == 'black' && ghy == 0) {
          window.alert('game over');
        }
      }
    }
  }

  check = () => {
    this.z = 0;
    // console.log('new5');
    for (let i = 0; i <= 63; i++) {
      if (document.getElementsByClassName('icon')[i].innerHTML == '♞' || document.getElementsByClassName('icon')[i].innerHTML == '♘') {
        this.king_knight(document.getElementsByClassName('icon')[i].id);
      }
      if (document.getElementsByClassName('icon')[i].innerHTML == '♖' || document.getElementsByClassName('icon')[i].innerHTML == '♜') {
        this.king_rook(document.getElementsByClassName('icon')[i].id);
      }
      if (document.getElementsByClassName('icon')[i].innerHTML == '♝' || document.getElementsByClassName('icon')[i].innerHTML == '♗') {
        this.king_bishop(document.getElementsByClassName('icon')[i].id);
      }
      if (document.getElementsByClassName('icon')[i].innerHTML == '♕' || document.getElementsByClassName('icon')[i].innerHTML == '♛') {
        this.king_bishop(document.getElementsByClassName('icon')[i].id,);
        this.king_rook(document.getElementsByClassName('icon')[i].id);
      }
      if (document.getElementsByClassName('icon')[i].innerHTML == '♟') {
        this.king_black_pawn(document.getElementsByClassName('icon')[i].id);
      }
      if (document.getElementsByClassName('icon')[i].innerHTML == '♙') {
        this.king_white_pawn(document.getElementsByClassName('icon')[i].id);
      }
    }
    // console.log(this.z)
  }
  check2 = (id) => {
    this.z = 0;
    // console.log('new5');
    for (let i = 0; i <= 63; i++) {
      if (this.sarr_white.includes(document.getElementById(id).innerHTML)) {
        if (document.getElementsByClassName('icon')[i].innerHTML == '♞') {
          this.king_knight(document.getElementsByClassName('icon')[i].id);
        }
        if (document.getElementsByClassName('icon')[i].innerHTML == '♜') {
          this.king_rook(document.getElementsByClassName('icon')[i].id);
        }
        if (document.getElementsByClassName('icon')[i].innerHTML == '♝') {
          this.king_bishop(document.getElementsByClassName('icon')[i].id);
        }
        if (document.getElementsByClassName('icon')[i].innerHTML == '♛') {
          this.king_bishop(document.getElementsByClassName('icon')[i].id,);
          this.king_rook(document.getElementsByClassName('icon')[i].id);
        }
        if (document.getElementsByClassName('icon')[i].innerHTML == '♟') {
          this.king_black_pawn(document.getElementsByClassName('icon')[i].id);
        }
      }
      else if (this.sarr_black.includes(document.getElementById(id).innerHTML)) {
        if (document.getElementsByClassName('icon')[i].innerHTML == '♙') {
          this.king_white_pawn(document.getElementsByClassName('icon')[i].id);
        }
        if (document.getElementsByClassName('icon')[i].innerHTML == '♘') {
          this.king_knight(document.getElementsByClassName('icon')[i].id);
        }
        if (document.getElementsByClassName('icon')[i].innerHTML == '♖') {
          this.king_rook(document.getElementsByClassName('icon')[i].id);
        }
        if (document.getElementsByClassName('icon')[i].innerHTML == '♕') {
          this.king_bishop(document.getElementsByClassName('icon')[i].id,);
          this.king_rook(document.getElementsByClassName('icon')[i].id);
        }
      }
    }
    // console.log(this.z)
  }


  king = (pawn_id) => {
    // setTimeout(() => {

    let new_id = pawn_id;
    let new_id11 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) + 1}`;
    let new_id12 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) - 1}`;
    let new_id21 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) + 1}`;
    let new_id22 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) - 1}`;
    let new_id13 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6])}`;
    let new_id14 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6])}`;
    let new_id23 = `r${parseInt(new_id[1])}icon${parseInt(new_id[6]) - 1}`;
    let new_id24 = `r${parseInt(new_id[1])}icon${parseInt(new_id[6]) + 1}`;

    // document.getElementById(new_id).style.border = '1px solid blue';

    if (document.getElementById(new_id11) != undefined && this.arr.includes(document.getElementById(new_id11).innerHTML) == false) {
      document.getElementById(new_id11).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id12) != undefined && this.arr.includes(document.getElementById(new_id12).innerHTML) == false) {
      document.getElementById(new_id12).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id21) != undefined && this.arr.includes(document.getElementById(new_id21).innerHTML) == false) {
      document.getElementById(new_id21).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id22) != undefined && this.arr.includes(document.getElementById(new_id22).innerHTML) == false) {
      document.getElementById(new_id22).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id13) != undefined && this.arr.includes(document.getElementById(new_id13).innerHTML) == false) {
      document.getElementById(new_id13).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id14) != undefined && this.arr.includes(document.getElementById(new_id14).innerHTML) == false) {
      document.getElementById(new_id14).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id23) != undefined && this.arr.includes(document.getElementById(new_id23).innerHTML) == false) {
      document.getElementById(new_id23).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id24) != undefined && this.arr.includes(document.getElementById(new_id24).innerHTML) == false) {
      document.getElementById(new_id24).style.border = '1px solid blue';
    }
    this.checkking(pawn_id);
    for (let i = 0; i <= 63; i++) {
      if (document.getElementsByClassName('icon')[i].style.border == "1px solid blue" && document.getElementsByClassName('icon')[i].innerHTML != '' && this.arr.includes(document.getElementsByClassName('icon')[i].innerHTML) == false)
        document.getElementsByClassName('icon')[i].style.border = "1px solid red";
    }

  }


  queen = (pawn_id) => {
    this.bishop(pawn_id);
    this.rook(pawn_id);
  }


  bishop = (pawn_id) => {
    // setTimeout(() => {

    let new_id = pawn_id;
    let new_id11 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) + 1}`;
    let new_id12 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) - 1}`;
    let new_id21 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) + 1}`;
    let new_id22 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) - 1}`;

    // document.getElementById(new_id).style.border = '1px solid blue';

    if (document.getElementById(new_id11) != undefined && this.arr.includes(document.getElementById(new_id11).innerHTML) == false) {
      document.getElementById(new_id11).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id12) != undefined && this.arr.includes(document.getElementById(new_id12).innerHTML) == false) {
      document.getElementById(new_id12).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id21) != undefined && this.arr.includes(document.getElementById(new_id21).innerHTML) == false) {
      document.getElementById(new_id21).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id22) != undefined && this.arr.includes(document.getElementById(new_id22).innerHTML) == false) {
      document.getElementById(new_id22).style.border = '1px solid blue';
    }

    while ((parseInt(new_id11[1]) <= 8 && document.getElementById(new_id11) != undefined && document.getElementById(new_id11).innerHTML == '')) {
      document.getElementById(new_id11).style.border = '1px solid blue';
      new_id11 = `r${parseInt(new_id11[1]) + 1}icon${parseInt(new_id11[6]) + 1}`;
      if (document.getElementById(new_id11) != undefined && this.arr.includes(document.getElementById(new_id11).innerHTML) == false) {
        document.getElementById(new_id11).style.border = '1px solid blue';
      }
    }

    while ((parseInt(new_id12[1]) >= 1 && document.getElementById(new_id12) != undefined && document.getElementById(new_id12).innerHTML == '')) {
      document.getElementById(new_id12).style.border = '1px solid blue';
      new_id12 = `r${parseInt(new_id12[1]) - 1}icon${parseInt(new_id12[6]) - 1}`;
      if (document.getElementById(new_id12) != undefined && this.arr.includes(document.getElementById(new_id12).innerHTML) == false) {
        document.getElementById(new_id12).style.border = '1px solid blue';
      }
    }

    while ((parseInt(new_id21[6]) >= 1 && document.getElementById(new_id21) != undefined && document.getElementById(new_id21).innerHTML == '')) {
      document.getElementById(new_id21).style.border = '1px solid blue';
      new_id21 = `r${parseInt(new_id21[1]) - 1}icon${parseInt(new_id21[6]) + 1}`;
      if (document.getElementById(new_id21) != undefined && this.arr.includes(document.getElementById(new_id21).innerHTML) == false) {
        document.getElementById(new_id21).style.border = '1px solid blue';
      }
    }

    while (parseInt(new_id22[6]) <= 8 && document.getElementById(new_id22) != undefined && (document.getElementById(new_id22).innerHTML == '')) {
      document.getElementById(new_id22).style.border = '1px solid blue';
      new_id22 = `r${parseInt(new_id22[1]) + 1}icon${parseInt(new_id22[6]) - 1}`;
      if (document.getElementById(new_id22) != undefined && this.arr.includes(document.getElementById(new_id22).innerHTML) == false) {
        document.getElementById(new_id22).style.border = '1px solid blue';
      }
    }
    for (let i = 0; i <= 63; i++) {
      if (document.getElementsByClassName('icon')[i].style.border == "1px solid blue" && this.arr.includes(document.getElementsByClassName('icon')[i].innerHTML) == false && document.getElementsByClassName('icon')[i].innerHTML != '')
        document.getElementsByClassName('icon')[i].style.border = "1px solid red";
    }
    this.checktime(pawn_id);
    this.checkdanger(pawn_id);

    // }, 1);

  }


  rook = (pawn_id) => {
    // setTimeout(() => {

    let new_id = pawn_id;
    let new_id11 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6])}`;
    let new_id12 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6])}`;
    let new_id21 = `r${parseInt(new_id[1])}icon${parseInt(new_id[6]) - 1}`;
    let new_id22 = `r${parseInt(new_id[1])}icon${parseInt(new_id[6]) + 1}`;

    // document.getElementById(new_id).style.border = '1px solid blue';

    if (document.getElementById(new_id11) != undefined && this.arr.includes(document.getElementById(new_id11).innerHTML) == false) {
      document.getElementById(new_id11).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id12) != undefined && this.arr.includes(document.getElementById(new_id12).innerHTML) == false) {
      document.getElementById(new_id12).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id21) != undefined && this.arr.includes(document.getElementById(new_id21).innerHTML) == false) {
      document.getElementById(new_id21).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id22) != undefined && this.arr.includes(document.getElementById(new_id22).innerHTML) == false) {
      document.getElementById(new_id22).style.border = '1px solid blue';
    }

    while ((parseInt(new_id11[1]) <= 8 && document.getElementById(new_id11).innerHTML == '')) {
      document.getElementById(new_id11).style.border = '1px solid blue';
      new_id11 = `r${parseInt(new_id11[1]) + 1}icon${parseInt(new_id11[6])}`;
      if (document.getElementById(new_id11) != undefined && this.arr.includes(document.getElementById(new_id11).innerHTML) == false) {
        document.getElementById(new_id11).style.border = '1px solid blue';
      }
    }

    while ((parseInt(new_id12[1]) >= 1 && document.getElementById(new_id12).innerHTML == '')) {
      document.getElementById(new_id12).style.border = '1px solid blue';
      new_id12 = `r${parseInt(new_id12[1]) - 1}icon${parseInt(new_id12[6])}`;
      if (document.getElementById(new_id12) != undefined && this.arr.includes(document.getElementById(new_id12).innerHTML) == false) {
        document.getElementById(new_id12).style.border = '1px solid blue';
      }
    }

    while ((parseInt(new_id21[6]) >= 1 && (document.getElementById(new_id21).innerHTML == ''))) {
      document.getElementById(new_id21).style.border = '1px solid blue';
      new_id21 = `r${parseInt(new_id21[1])}icon${parseInt(new_id21[6]) - 1}`;
      if (document.getElementById(new_id21) != undefined && this.arr.includes(document.getElementById(new_id21).innerHTML) == false) {
        document.getElementById(new_id21).style.border = '1px solid blue';
      }
    }

    while (parseInt(new_id22[6]) <= 8 && (document.getElementById(new_id22).innerHTML == '')) {
      document.getElementById(new_id22).style.border = '1px solid blue';
      new_id22 = `r${parseInt(new_id22[1])}icon${parseInt(new_id22[6]) + 1}`;
      if (document.getElementById(new_id22) != undefined && this.arr.includes(document.getElementById(new_id22).innerHTML) == false) {
        document.getElementById(new_id22).style.border = '1px solid blue';
      }
    }
    for (let i = 0; i <= 63; i++) {
      if (document.getElementsByClassName('icon')[i].style.border == "1px solid blue" && this.arr.includes(document.getElementsByClassName('icon')[i].innerHTML) == false && document.getElementsByClassName('icon')[i].innerHTML != '')
        document.getElementsByClassName('icon')[i].style.border = "1px solid red";
    }
    this.checktime(pawn_id);
    this.checkdanger(pawn_id);

    // }, 1);

  }


  white_pawn = (pawn_id) => {

    let new_id = pawn_id;
    let new_id1 = `r${parseInt(new_id[1]) + 1}icon${new_id[6]}`;
    let new_id11 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) + 1}`;
    let new_id12 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) - 1}`;
    let new_id2 = `r${parseInt(new_id[1]) + 2}icon${new_id[6]}`;

    if (document.getElementById(pawn_id).parentElement.id == 'row2') {

      // document.getElementById(`r${new_id[1]}icon${new_id[6]}`).style.border = '1px solid blue';
      document.getElementById(new_id1).innerHTML != '' ? console.log('') : document.getElementById(new_id1).style.border = '1px solid blue';

      if (document.getElementById(new_id1).innerHTML == '') {
        document.getElementById(new_id2).innerHTML != '' ? console.log('') : document.getElementById(new_id2).style.border = '1px solid blue';
      }
      if (parseInt(new_id[6]) < 8) {
        this.sarr_black.includes(document.getElementById(new_id11).innerHTML) ? document.getElementById(new_id11).style.border = '1px solid blue' : console.log();
      }
      if (parseInt(new_id[6]) > 1) {
        this.sarr_black.includes(document.getElementById(new_id12).innerHTML) ? document.getElementById(new_id12).style.border = '1px solid blue' : console.log();
      }

    }

    else {

      // document.getElementById(`r${new_id[1]}icon${new_id[6]}`).style.border = '1px solid blue';
      document.getElementById(new_id1).innerHTML != '' ? console.log('') : document.getElementById(new_id1).style.border = '1px solid blue';

      if (parseInt(new_id[6]) < 8) {
        this.sarr_black.includes(document.getElementById(new_id11).innerHTML) ? document.getElementById(new_id11).style.border = '1px solid blue' : console.log();
      }
      if (parseInt(new_id[6]) > 1) {
        this.sarr_black.includes(document.getElementById(new_id12).innerHTML) ? document.getElementById(new_id12).style.border = '1px solid blue' : console.log();
      }

    }
    // this.checktime(pawn_id);
    this.checkdanger(pawn_id);


  }


  black_pawn = (pawn_id) => {

    let new_id = pawn_id;
    let new_id1 = `r${parseInt(new_id[1]) - 1}icon${new_id[6]}`;
    let new_id11 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) + 1}`;
    let new_id12 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) - 1}`;
    let new_id2 = `r${parseInt(new_id[1]) - 2}icon${new_id[6]}`;

    if (document.getElementById(pawn_id).parentElement.id == 'row7') {

      // document.getElementById(`r${new_id[1]}icon${new_id[6]}`).style.border = '1px solid blue';
      document.getElementById(new_id1).innerHTML != '' ? console.log('') : document.getElementById(new_id1).style.border = '1px solid blue';

      if (document.getElementById(new_id1).innerHTML == '') {
        document.getElementById(new_id2).innerHTML != '' ? console.log('') : document.getElementById(new_id2).style.border = '1px solid blue';
      }
      if (parseInt(new_id[6]) < 8) {
        this.sarr_white.includes(document.getElementById(new_id11).innerHTML) ? document.getElementById(new_id11).style.border = '1px solid blue' : console.log();
      }
      if (parseInt(new_id[6]) > 1) {
        this.sarr_white.includes(document.getElementById(new_id12).innerHTML) ? document.getElementById(new_id12).style.border = '1px solid blue' : console.log();
      }

    }

    else {
      // document.getElementById(`r${new_id[1]}icon${new_id[6]}`).style.border = '1px solid blue';
      document.getElementById(new_id1).innerHTML != '' ? console.log('') : document.getElementById(new_id1).style.border = '1px solid blue';

      if (parseInt(new_id[6]) < 8) {
        this.sarr_white.includes(document.getElementById(new_id11).innerHTML) ? document.getElementById(new_id11).style.border = '1px solid blue' : console.log();
      }
      if (parseInt(new_id[6]) > 1) {
        this.sarr_white.includes(document.getElementById(new_id12).innerHTML) ? document.getElementById(new_id12).style.border = '1px solid blue' : console.log();
      }

    }

    // this.checktime(pawn_id);
    this.checkdanger(pawn_id);

  }


  knight = (pawn_id) => {
    // setTimeout(() => {

    let new_id = pawn_id;
    let new_id13 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) - 2}`;
    let new_id14 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) - 2}`;
    let new_id23 = `r${parseInt(new_id[1]) - 2}icon${parseInt(new_id[6]) + 1}`;
    let new_id24 = `r${parseInt(new_id[1]) - 2}icon${parseInt(new_id[6]) - 1}`;
    let new_id33 = `r${parseInt(new_id[1]) + 2}icon${parseInt(new_id[6]) + 1}`;
    let new_id34 = `r${parseInt(new_id[1]) + 2}icon${parseInt(new_id[6]) - 1}`;
    let new_id43 = `r${parseInt(new_id[1]) + 1}icon${parseInt(new_id[6]) + 2}`;
    let new_id44 = `r${parseInt(new_id[1]) - 1}icon${parseInt(new_id[6]) + 2}`;

    // document.getElementById(pawn_id).style.border = '1px solid blue';

    if (document.getElementById(new_id13) != undefined && this.arr.includes(document.getElementById(new_id13).innerHTML) != true) {
      document.getElementById(new_id13).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id14) != undefined && this.arr.includes(document.getElementById(new_id14).innerHTML) != true) {
      document.getElementById(new_id14).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id23) != undefined && this.arr.includes(document.getElementById(new_id23).innerHTML) != true) {
      document.getElementById(new_id23).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id24) != undefined && this.arr.includes(document.getElementById(new_id24).innerHTML) != true) {
      document.getElementById(new_id24).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id33) != undefined && this.arr.includes(document.getElementById(new_id33).innerHTML) != true) {
      document.getElementById(new_id33).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id34) != undefined && this.arr.includes(document.getElementById(new_id34).innerHTML) != true) {
      document.getElementById(new_id34).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id43) != undefined && this.arr.includes(document.getElementById(new_id43).innerHTML) != true) {
      document.getElementById(new_id43).style.border = '1px solid blue';
    }
    if (document.getElementById(new_id44) != undefined && this.arr.includes(document.getElementById(new_id44).innerHTML) != true) {
      document.getElementById(new_id44).style.border = '1px solid blue';
    }

    for (let i = 0; i <= 63; i++) {
      if (document.getElementsByClassName('icon')[i].style.border == "1px solid blue" && this.arr.includes(document.getElementsByClassName('icon')[i].innerHTML) == false && document.getElementsByClassName('icon')[i].innerHTML != '')
        document.getElementsByClassName('icon')[i].style.border = "1px solid red";
    }
    this.checktime(pawn_id);
    this.checkdanger(pawn_id);
    // }, 1);

  }


  checktime = (id) => {
    // setTimeout(() => {
    this.z = 0;
    if (this.sarr_white.includes(document.getElementById(id).innerHTML)) {
      this.check2(id);
    }
    if (this.sarr_black.includes(document.getElementById(id).innerHTML)) {
      this.check(id);
    }
    for (let i = 0; i <= 63; i++) {

      if (document.getElementsByClassName('icon')[i].innerHTML == '♔' || document.getElementsByClassName('icon')[i].innerHTML == '♚') {
        // console.log('pass1')
        if (this.arr.includes(document.getElementsByClassName('icon')[i].innerHTML)) {
          // console.log('pass2')

          if (document.getElementsByClassName('icon')[i].style.border == '1px solid green') {
            // console.log('pass3')

            let kcolor = document.getElementsByClassName('icon')[i].id;
            for (let o = 0; o <= 63; o++) {

              if (document.getElementsByClassName('icon')[o].style.border == '1px solid blue') {
                // console.log('new1');
                let ikd = document.getElementsByClassName('icon')[o].id;
                document.getElementById(ikd).innerHTML = document.getElementById(id).innerHTML;
                if (this.sarr_white.includes(document.getElementById(id).innerHTML)) {
                  this.check2(id);
                }
                if (this.sarr_black.includes(document.getElementById(id).innerHTML)) {
                  this.check(id);
                }
                // console.log(document.getElementsByClassName('icon')[i].style.border);

                if (document.getElementsByClassName('icon')[i].style.border == "1px solid black") {
                  console.log('my name is dhaval');
                  document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
                  document.getElementById(ikd).innerHTML = '';
                }
                else if (document.getElementsByClassName('icon')[i].style.border == '1px solid green') {
                  document.getElementById(ikd).style.border = "1px solid black";
                  document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
                  document.getElementById(ikd).innerHTML = '';
                }
              }

              else if (document.getElementsByClassName('icon')[o].style.border == '1px solid red') {

                let ikd = document.getElementsByClassName('icon')[o].id;
                let u = document.getElementById(ikd).innerHTML;
                document.getElementById(ikd).innerHTML = document.getElementById(id).innerHTML;
                this.check();

                if (document.getElementsByClassName('icon')[i].style.border == "1px solid black") {
                  document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
                  document.getElementById(ikd).innerHTML = u;
                }
                else if (document.getElementsByClassName('icon')[i].style.border == '1px solid green') {
                  document.getElementById(ikd).style.border = "1px solid black";
                  document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
                  document.getElementById(ikd).innerHTML = u;
                }
              }
            }
          }
        }
      }
    }

    // for (let i = 1; i <= 63; i++) {
    //   if (this.arr.includes(document.getElementsByClassName('icon')[i].innerHTML) == false) {
    //     if ((document.getElementsByClassName('icon')[i].innerHTML == '♔' || document.getElementsByClassName('icon')[i].innerHTML == '♚') && document.getElementsByClassName('icon')[i].style.border == '1px solid green')
    //       document.getElementsByClassName('icon')[i].style.border="1px solid black";
    //     // console.log('yes');
    //   }
    // }
    // }, 0);

  }

  componentDidMount() {
    if (window.innerHeight < window.innerWidth) {
      document.getElementById("chess").style.height = "82vh"
      document.getElementById("chess").style.width = "82vh"
      for (let i = 0; i < 64; i++) {
        document.getElementsByClassName("icon")[i].style.height = "10vh"
        document.getElementsByClassName("icon")[i].style.width = "10vh"
      }
    }
    if (window.innerHeight >= window.innerWidth) {
      document.getElementById("chess").style.height = "82vw"
      document.getElementById("chess").style.width = "82vw"
      for (let i = 0; i < 64; i++) {
        document.getElementsByClassName("icon")[i].style.height = "10vw"
        document.getElementsByClassName("icon")[i].style.width = "10vw"
      }
    }
  }
  clk = (e) => {
    var bd = document.getElementById(e.target.id).innerHTML;
    const arr_white = ['♔', '♕', '♖', '♗', '♘', '♙'];
    const arr_black = ['♚', '♛', '♜', '♝', '♞', '♟'];

    if (arr_black.includes(bd) && this.index == 0) {
      this.arr = arr_black;
    }
    else if (this.index == 0) {
      this.arr = arr_white;
    }
    this.check(e.target.id);

    if (this.index == 1) {
      for (i = 0; i <= 63; i++) {
        if (document.getElementsByClassName('icon')[i].style.border == "1px solid green") {
          this.back();
        }
      }
    }

    if (bd != '' && this.index == 0) {

      var i;

      if (this.turn == 'black' && arr_black.includes(goti) || this.turn == 'white' && arr_white.includes(goti)) {
        for (i = 0; i <= 63; i++) {
          document.getElementsByClassName('icon')[i].style.color = "black";
          document.getElementsByClassName('icon')[i].style.border = "1px solid black";
        }
      }

      var goti = document.getElementById(e.target.id).innerHTML;
      var id = document.getElementById(e.target.id);

      if (this.turn == 'white' && arr_white.includes(goti)) {

        this.goticode = goti;
        this.idd = e.target.id;
        this.index = 1;
        this.turn = 'black';
        id.style.color = "red";

        (goti == '♕' || goti == '♛') ? this.queen(e.target.id) : goti = goti;
        (goti == '♖' || goti == '♜') ? this.rook(e.target.id) : goti = goti;
        (goti == '♝' || goti == '♗') ? this.bishop(e.target.id) : goti = goti;
        goti == '♙' ? this.white_pawn(e.target.id) : goti = goti;
        (goti == '♘' || goti == '♞') ? this.knight(e.target.id) : goti = goti;
        // this.checktime(e.target.id);
        (goti == '♔' || goti == '♚') ? this.king(e.target.id) : goti = goti;

        for (i = 0; i <= 63; i++) {
          if (document.getElementsByClassName('icon')[i].style.border == "1px solid blue" && this.sarr_black.includes(document.getElementsByClassName('icon')[i].innerHTML) == true)
            document.getElementsByClassName('icon')[i].style.border = "1px solid red";
        }

      }

      else if (this.turn == 'black' && arr_black.includes(goti)) {

        this.goticode = goti;
        this.idd = e.target.id;
        this.index = 1;
        this.turn = 'white';
        id.style.color = "red";

        (goti == '♘' || goti == '♞') ? this.knight(e.target.id) : goti = goti;
        (goti == '♕' || goti == '♛') ? this.queen(e.target.id) : goti = goti;
        (goti == '♖' || goti == '♜') ? this.rook(e.target.id) : goti = goti;
        (goti == '♝' || goti == '♗') ? this.bishop(e.target.id) : goti = goti;
        goti == '♟' ? this.black_pawn(e.target.id) : goti = goti;
        // this.checktime(e.target.id);
        (goti == '♔' || goti == '♚') ? this.king(e.target.id) : goti = goti;

        for (i = 0; i <= 63; i++) {
          if (document.getElementsByClassName('icon')[i].style.border == "1px solid blue" && this.sarr_white.includes(document.getElementsByClassName('icon')[i].innerHTML) == true)
            document.getElementsByClassName('icon')[i].style.border = "1px solid red";
        }

      }

      else {
        window.alert('invalid move');
      }

    }

    else if (bd != '' && this.index == 1 && document.getElementById(e.target.id).style.color != "red") {

      if (this.arr.includes(bd) != true) {

        if ((this.idd || this.goticode) != '' && (document.getElementById(e.target.id).style.border == '1px solid blue' || document.getElementById(e.target.id).style.border == '1px solid red')) {
          document.getElementById(e.target.id).innerHTML = this.goticode;
          document.getElementById(this.idd).innerHTML = '';
          this.goticode = '';
          this.idd = '';
          this.index = 0;
          this.dis = false;

          for (i = 0; i <= 63; i++) {
            document.getElementsByClassName('icon')[i].style.color = "black";
            document.getElementsByClassName('icon')[i].style.border = "1px solid black";
          }
        }

      }

      else {

        var i;
        for (i = 0; i <= 63; i++) {
          document.getElementsByClassName('icon')[i].style.color = "black";
          document.getElementsByClassName('icon')[i].style.border = "1px solid black";
        }

        var goti = document.getElementById(e.target.id).innerHTML;
        var id = document.getElementById(e.target.id);
        this.goticode = goti;
        this.idd = e.target.id;
        this.index = 1;
        id.style.color = "red";

        goti == '♙' ? this.white_pawn(e.target.id) : goti = goti;
        goti == '♟' ? this.black_pawn(e.target.id) : goti = goti;
        (goti == '♖' || goti == '♜') ? this.rook(e.target.id) : goti = goti;
        (goti == '♝' || goti == '♗') ? this.bishop(e.target.id) : goti = goti;
        (goti == '♕' || goti == '♛') ? this.queen(e.target.id) : goti = goti;
        (goti == '♘' || goti == '♞') ? this.knight(e.target.id) : goti = goti;
        // this.checktime(e.target.id);
        (goti == '♔' || goti == '♚') ? this.king(e.target.id) : goti = goti;

        for (i = 0; i <= 63; i++) {

          if (document.getElementsByClassName('icon')[i].style.border == "1px solid blue" && document.getElementsByClassName('icon')[i].innerHTML != '' && this.arr.includes(document.getElementsByClassName('icon')[i].innerHTML) == false)
            document.getElementsByClassName('icon')[i].style.border = "1px solid red";
        }

      }
    }

    else if (bd == '' && (document.getElementById(e.target.id).style.border == '1px solid blue' || document.getElementById(e.target.id).style.border == '1px solid red')) {

      if ((this.idd || this.goticode) != '') {

        document.getElementById(e.target.id).innerHTML = this.goticode;
        document.getElementById(this.idd).innerHTML = '';
        this.goticode = '';
        this.idd = ''; this.index = 0;
        this.dis = false;

        for (i = 0; i <= 63; i++) {
          document.getElementsByClassName('icon')[i].style.color = "black";
          document.getElementsByClassName('icon')[i].style.border = "1px solid black";
        }

      }
    }

    for (let i = 1; i <= 63; i++) {
      if ((document.getElementsByClassName('icon')[i].innerHTML == '♚' || document.getElementsByClassName('icon')[i].innerHTML == '♔') && document.getElementsByClassName('icon')[i].style.border == '1px solid green') {
        this.mate(document.getElementsByClassName('icon')[i].id);
      }
    }
    (goti == '♔' || goti == '♚') ? this.king(e.target.id) : goti = goti;
    for (let l = 0; i <= 63; i++) {
      if (document.getElementsByClassName('icon')[i].style.border == '1px solid green') {
        this.back();
        window.alert('inval');
      }
    }
    this.check(e.target.id);
  }
  render() {
    return (<>
      <div className="App" id='new'>
        <div id="chess">
          <div id="row1" className="row">
            <div className="icon black" id="r1icon1" onClick={this.clk}>&#9814;</div>
            <div className="icon white" id="r1icon2" onClick={this.clk}>&#9816;</div>
            <div className="icon black" id="r1icon3" onClick={this.clk}>&#9815;</div>
            <div className="icon white" id="r1icon4" onClick={this.clk}>&#9813;</div>
            <div className="icon black" id="r1icon5" onClick={this.clk}>&#9812;</div>
            <div className="icon white" id="r1icon6" onClick={this.clk}>&#9815;</div>
            <div className="icon black" id="r1icon7" onClick={this.clk}>&#9816;</div>
            <div className="icon white" id="r1icon8" onClick={this.clk}>&#9814;</div>
          </div>

          <div id="row2" className="row">
            <div className="icon white" id="r2icon1" onClick={this.clk}>&#9817;</div>
            <div className="icon black" id="r2icon2" onClick={this.clk}>&#9817;</div>
            <div className="icon white" id="r2icon3" onClick={this.clk}>&#9817;</div>
            <div className="icon black" id="r2icon4" onClick={this.clk}>&#9817;</div>
            <div className="icon white" id="r2icon5" onClick={this.clk}>&#9817;</div>
            <div className="icon black" id="r2icon6" onClick={this.clk}>&#9817;</div>
            <div className="icon white" id="r2icon7" onClick={this.clk}>&#9817;</div>
            <div className="icon black" id="r2icon8" onClick={this.clk}>&#9817;</div>
          </div>
          <div id="row3naclassName" className="row">
            <div className="icon black" id="r3icon1" onClick={this.clk}></div>
            <div className="icon white" id="r3icon2" onClick={this.clk}></div>
            <div className="icon black" id="r3icon3" onClick={this.clk}></div>
            <div className="icon white" id="r3icon4" onClick={this.clk}></div>
            <div className="icon black" id="r3icon5" onClick={this.clk}></div>
            <div className="icon white" id="r3icon6" onClick={this.clk}></div>
            <div className="icon black" id="r3icon7" onClick={this.clk}></div>
            <div className="icon white" id="r3icon8" onClick={this.clk}></div>
          </div>

          <div id="row4" className="row">
            <div className="icon white" id="r4icon1" onClick={this.clk}></div>
            <div className="icon black" id="r4icon2" onClick={this.clk}></div>
            <div className="icon white" id="r4icon3" onClick={this.clk}></div>
            <div className="icon black" id="r4icon4" onClick={this.clk}></div>
            <div className="icon white" id="r4icon5" onClick={this.clk}></div>
            <div className="icon black" id="r4icon6" onClick={this.clk}></div>
            <div className="icon white" id="r4icon7" onClick={this.clk}></div>
            <div className="icon black" id="r4icon8" onClick={this.clk}></div>
          </div>

          <div id="row5" className="row">
            <div className="icon black" id="r5icon1" onClick={this.clk}></div>
            <div className="icon white" id="r5icon2" onClick={this.clk}></div>
            <div className="icon black" id="r5icon3" onClick={this.clk}></div>
            <div className="icon white" id="r5icon4" onClick={this.clk}></div>
            <div className="icon black" id="r5icon5" onClick={this.clk}></div>
            <div className="icon white" id="r5icon6" onClick={this.clk}></div>
            <div className="icon black" id="r5icon7" onClick={this.clk}></div>
            <div className="icon white" id="r5icon8" onClick={this.clk}></div>
          </div>

          <div id="row6" className="row">
            <div className="icon white" id="r6icon1" onClick={this.clk}></div>
            <div className="icon black" id="r6icon2" onClick={this.clk}></div>
            <div className="icon white" id="r6icon3" onClick={this.clk}></div>
            <div className="icon black" id="r6icon4" onClick={this.clk}></div>
            <div className="icon white" id="r6icon5" onClick={this.clk}></div>
            <div className="icon black" id="r6icon6" onClick={this.clk}></div>
            <div className="icon white" id="r6icon7" onClick={this.clk}></div>
            <div className="icon black" id="r6icon8" onClick={this.clk}></div>
          </div>

          <div id="row7" className="row">
            <div className="icon black" id="r7icon1" onClick={this.clk}>&#9823;</div>
            <div className="icon white" id="r7icon2" onClick={this.clk}>&#9823;</div>
            <div className="icon black" id="r7icon3" onClick={this.clk}>&#9823;</div>
            <div className="icon white" id="r7icon4" onClick={this.clk}>&#9823;</div>
            <div className="icon black" id="r7icon5" onClick={this.clk}>&#9823;</div>
            <div className="icon white" id="r7icon6" onClick={this.clk}>&#9823;</div>
            <div className="icon black" id="r7icon7" onClick={this.clk}>&#9823;</div>
            <div className="icon white" id="r7icon8" onClick={this.clk}>&#9823;</div>
          </div>

          <div id="row8" className="row">
            <div className="icon white" id="r8icon1" onClick={this.clk}>&#9820;</div>
            <div className="icon black" id="r8icon2" onClick={this.clk}>&#9822;</div>
            <div className="icon white" id="r8icon3" onClick={this.clk}>&#9821;</div>
            <div className="icon black" id="r8icon4" onClick={this.clk}>&#9818;</div>
            <div className="icon white" id="r8icon5" onClick={this.clk}>&#9819;</div>
            <div className="icon black" id="r8icon6" onClick={this.clk}>&#9821;</div>
            <div className="icon white" id="r8icon7" onClick={this.clk}>&#9822;</div>
            <div className="icon black" id="r8icon8" onClick={this.clk}>&#9820;</div>
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default Chess;