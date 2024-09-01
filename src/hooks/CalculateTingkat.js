export const calculateTingkat = (userData, score) => {
    let tingkat;

    if (score >= 10 && score < 50) {
        if (userData.exercise1 >= 3) {
            if (userData.exercise2 >= 3) {
                tingkat = 'tinggi';
            } else {
                tingkat = 'sedang';
            }
        } else {
            tingkat = 'rendah';
        }
    } else if (score >= 50 && score < 80) {
        if (userData.exercise1 >= 3) {
            if (userData.exercise2 >= 3) {
                tingkat = 'tinggi';
            } else {
                tingkat = 'sedang';
            }
        } else {
            tingkat = 'sedang';
        }
    } else if (score >= 80 && score <= 100) {
        if (userData.exercise1 >= 3) {
            if (userData.exercise2 >= 3) {
                tingkat = 'tinggi';
            } else {
                tingkat = 'sedang';
            }
        }
    } else {
        tingkat = null;
    }

    return tingkat;
};
