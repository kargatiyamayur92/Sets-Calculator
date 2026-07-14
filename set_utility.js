export class sets_utility {

    intersection(A, B) {
        let ans = []
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < B.length; j++) {
                if (A[i] == B[j]) {
                    ans.push(A[i])
                }
            }
        }
        ans.sort((a, b) => a - b);
        return ans;
    }

    Union(A, B) {
        let ans = []
        for (let i = 0; i < A.length; i++) {
            ans.push(A[i]);
        }

        for (let j = 0; j < B.length; j++) {
            ans.push(B[j])
        }

        ans.sort((a, b) => a - b)

        for (let i = 1; i < ans.length; i++) {
            if (ans[i] == ans[i - 1]) {
                ans.splice(i, 1)
            }
        }

        return ans;
    }

    complement(U, A) {
        let ans = []
        for (let i = 0; i < U.length; i++) {
            ans.push(U[i]);
        }

        //remove element of Set A
        for (let i = 0; i < ans.length; i++) {
            for (let j = 0; j < A.length; j++) {
                if (ans[i] == A[j]) {
                    ans.splice(i, 1);
                }
            }
        }
        ans.sort((a, b) => a - b);
        return ans;
    }

    diffrence(A, B) {
        let ans = []
        for (let i = 0; i < A.length; i++) {
            ans.push(A[i]);
        }

        //remove element of Set A
        for (let i = 0; i < ans.length; i++) {
            for (let j = 0; j < B.length; j++) {
                if (ans[i] == B[j]) {
                    ans.splice(i, 1);
                }
            }
        }
        ans.sort((a, b) => a - b);
        return ans;
    }

    SymmentricDiffrence(A, B) {
        let ans = []
        for (let i = 0; i < A.length; i++) {
            ans.push(A[i]);
        }

        //remove element of Set A
        for (let i = 0; i < ans.length; i++) {
            for (let j = 0; j < B.length; j++) {
                if (ans[i] == B[j]) {
                    ans.splice(i, 1);
                }
            }
        }
        ans.sort((a, b) => a - b);

        return ans;

    }

}