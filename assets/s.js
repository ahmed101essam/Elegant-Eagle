 const quantityInput = document.querySelector("input[name='quantity']");
    const minusBtn = document.querySelector('.btn-minus');
    const plusBtn = document.querySelector('.btn-plus');

    minusBtn.addEventListener('click', () => {
      let value = parseInt(quantityInput.value);
      if (value > 1) quantityInput.value = value - 1;
    });

    plusBtn.addEventListener('click', () => {
      let value = parseInt(quantityInput.value);
      quantityInput.value = value + 1;
    });
