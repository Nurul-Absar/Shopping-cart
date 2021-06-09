

  //  document.getElementById('case-increase').addEventListener('click',function () {
    //    //  const caseValue=document.getElementById('current-inputValue');
    //    //  const caseNewValue=parseInt(caseValue.value);
    //    //  const caseCount=caseNewValue+1;
    //    //  caseValue.value=caseCount;
    //    //  const totalValue=caseCount*59;
    //    //  document.getElementById('case-price').innerHTML='$'+totalValue;
    //    productChange(true);


    // })
    // document.getElementById('case-decrease').addEventListener('click', function () {
    //    // const caseValue=document.getElementById('current-inputValue');
    //    // const caseNewValue=parseInt(caseValue.value);
    //    // const caseCount=caseNewValue-1;
    //    // caseValue.value=caseCount;


    //    // if((caseValue.value<0)){
    //    //    caseValue.value=0;
    //    //    totalValue=0;
    //    // }
    //    // const totalValue=caseCount*59;
    //    //  document.getElementById('case-price').innerHTML='$'+totalValue;
    //    productChange(false);


    // })
    // function productChange(isIncrease) {
    //    const caseValue=document.getElementById('current-inputValue');
    //     const caseNewValue=parseInt(caseValue.value);
    //     let caseCount=caseNewValue;
    //    if (isIncrease==true) {

    //      caseCount=caseNewValue+1;
    //     caseValue.value=caseCount;
    //     const totalValue=caseCount*59;
    //     document.getElementById('case-price').innerHTML='$'+totalValue;

    //    }
    //    if((isIncrease==false)&&(caseCount>0)){

    //    const caseCount=caseNewValue-1;
    //    caseValue.value=caseCount;


    //    // if((caseValue.value<0)){
    //    //    caseValue.value=0;
    //    //    //totalValue=0;
    //    // }
    //    const totalValue=caseCount*59;
    //     document.getElementById('case-price').innerHTML='$'+totalValue;

    //    }


    // }


    function phoneChange(product, isIncrease) {
      const productValue = document.getElementById(product + '-InputValue');
      const productCount = parseInt(productValue.value);
      let productNewCount = productCount;
      if (isIncrease == true) {

        productNewCount = productCount + 1;

        // var totalValue=phoneNewCount*1219;
        // // document.getElementById('phonePrice').innerText='$'+totalValue;
        // if(product=='phone')
        // {
        //    var totalValue=productNewCount*1219;
        // document.getElementById('phonePrice').innerText='$'+totalValue;
        // }
        // if(product=='case')

      }
      if ((isIncrease == false) && (productCount > 0)) {

        productNewCount = productCount - 1;
        // productValue.value=productNewCount;
        // var totalValue1=phoneNewCount*1219;
        // document.getElementById('phonePrice').innerText='$'+totalValue1;


      }
      productValue.value = productNewCount;
      let productTotal = 0;
      if (product == 'phone') {
        productTotal = productNewCount * 1219;


      }
      if (product == 'case') {
        productTotal = productNewCount * 59;


      }


      document.getElementById(product + 'Price').innerText = '$' + productTotal;


      TotalCalculation();





    }

     function TotalCalculation() {
       const phoneValue = document.getElementById('phone-InputValue');
       const phoneCount = parseInt(phoneValue.value);
       const caseValue = document.getElementById('case-InputValue');
       const caseCount = parseInt(caseValue.value);



       const totalSubPrice = caseCount * 59 + phoneCount * 1219;
       document.getElementById('Subtotal').innerText = '$' + totalSubPrice;
       const taxValue = caseCount * 11 + phoneCount * 150;
       document.getElementById('tax').innerText = '$' + taxValue;
       const totalPrice = taxValue + totalSubPrice;
       document.getElementById('total').innerText = '$' + totalPrice;





   }

