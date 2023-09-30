const fibonacci = (n) => {
    if (n <= 2) {
      return 1;
    }
  
    let prev = 1;
    let current = 1;
  
    for (let i = 3; i <= n; i++) {
      const next = prev + current;
      prev = current;
      current = next;
    }
  
    return current;
  };
  
  const n = 3; // Замените значение n на желаемое число
  console.log(`n-й член последовательности Фибоначчи для n = ${n}: ${fibonacci(n)}`);
  