let nums = [1, 24, 38, 4, 100];
let maior = nums[0];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maior) {
        maior = nums[i];
    }
}
console.log(`O maior numero é: ${maior}`);
