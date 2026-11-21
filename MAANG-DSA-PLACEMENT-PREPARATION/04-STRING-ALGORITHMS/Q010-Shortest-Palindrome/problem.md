# Q010: Shortest Palindrome (KMP Prefix Function / Rolling Hash)

## 1. Problem Information

- **Problem Title:** Shortest Palindrome (KMP Prefix Function / Rolling Hash)
- **Problem ID:** Q010
- **Original Platform:** LeetCode
- **Original Problem ID:** 214
- **Original Problem Link:** [LeetCode #214](https://leetcode.com/problems/shortest-palindrome/)
- **Difficulty:** Hard
- **Target MAANG Companies:** Google, Meta, Apple, Amazon
- **Primary DSA Concepts:** Knuth-Morris-Pratt (KMP) Prefix Function, String Reversal Matching
- **Advanced DSA Concepts:** Polynomial Rolling Hash (Rabin-Karp), Longest Palindromic Prefix

---

## 2. Problem Statement

You are given a string s. You can convert s to a palindrome by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.

---

## 3. Input Format

A single string s consisting of lowercase English letters.

---

## 4. Output Format

Return a string representing the shortest palindrome obtained by prepending characters to s.

---

## 5. Constraints

- `0 <= s.length <= 5 * 10^4`
- `s consists of lowercase English letters only.`

---

## 6. Examples

### Example 1

```text
Input: s = "aacecaaa"
Output: "aaacecaaa"
```

**Explanation:**
The longest palindromic prefix of s is "aacecaa". Prepending the reversed remainder "a" yields "aaacecaaa".

### Example 2

```text
Input: s = "abcd"
Output: "dcbabcd"
```

**Explanation:**
The longest palindromic prefix is "a". Prepending the reversed remainder "dcb" gives "dcbabcd".


---

## 7. Edge Cases to Consider

- **s is empty:**  Output is empty string.
- **s is already a palindrome:**  Prepending 0 characters returns s unmodified.
- **All identical characters (e.g. 'aaaaa'):**  Longest palindromic prefix is s itself.
- **No palindromic prefix longer than 1 (e.g. 'abcdef'):**  Must prepend reversed suffix of length n-1.

---

## 8. Concept Classification

- **Primary Concepts:** Knuth-Morris-Pratt (KMP) Prefix Function; String Reversal Matching
- **Advanced Concepts:** Polynomial Rolling Hash (Rabin-Karp); Longest Palindromic Prefix
- **Prerequisite Knowledge Required:** Graph/Tree traversals, amortized complexity analysis, advanced data structures, and mathematical boundary invariance.

---

## 9. Industry Relevance

The following table documents verified interview reports indicating this problem or its core technical pattern has been tested at target MAANG companies:

| Company | Source Platform | Interview Year | Problem Match | Report Evidence | Reference Link |
|---|---|---|---|---|---|
| **Google** | LeetCode Discuss | 2024 | Exact problem | Asked in Google Mountain View L4 round, candidate tested on comparing KMP prefix array versus Rolling Hash. | [View Report](https://leetcode.com/discuss/interview-experience/4932189/Google-L4-SWE-KMP-Algorithm) |
| **Meta** | Glassdoor | 2023 | Exact problem | Reported in Meta London coding round assessing deterministic O(N) string processing without hash collisions. | [View Report](https://www.glassdoor.com/Interview/Meta-Software-Engineer-Interview-Questions-E40772.htm) |
| **Apple** | LeetCode Discuss | 2023 | Similar variant | Asked to find shortest palindrome by appending characters at both ends. | [View Report](https://leetcode.com/discuss/interview-experience/3891044/Apple-Software-Engineer-String-Algorithms) |
| **Amazon** | GeeksforGeeks | 2022 | Exact problem | Candidate asked to optimize brute force O(N^2) string palindrome search to O(N). | [View Report](https://www.geeksforgeeks.org/amazon-interview-experience-for-sde-2-3-years-experienced/) |

---

## 10. Prerequisite Learning Path

To progressively build the foundational insights required to tackle this problem, solve the following questions in sequence:

| Platform | Problem Name | Problem ID | Difficulty / Rating | Core Concepts | Learning Objective | Direct URL |
|---|---|---|---|---|---|---|
| **LeetCode** | Find the Index of the First Occurrence in a String | 28 | Easy | KMP Algorithm, Prefix Table pi | Implement KMP $\pi$ table calculation cleanly. | [Link](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) |
| **LeetCode** | Longest Happy Prefix | 1392 | Hard | KMP Prefix Function, Rolling Hash | Find longest proper prefix that is also a suffix. | [Link](https://leetcode.com/problems/longest-happy-prefix/) |
| **Codeforces** | Anthem of Berland | 808G | 2200 | KMP Automaton, Dynamic Programming | Deeply internalize the prefix function $\pi[i]$. | [Link](https://codeforces.com/problemset/problem/808/G) |

---

## 11. Interview Challenge & Follow-Up Questions

In a top-tier technical round, interviewers will challenge you with modifications once the base problem is identified. Consider these scenarios:

### Challenge Variation 1: Shortest Palindrome by Appending Characters at the End
- **Modified Requirement:** Characters can only be added to the END of s instead of the front.
- **Additional Concepts Introduced:** Longest Palindromic Suffix via KMP on s^R + '#' + s
- **Target Difficulty:** Hard
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 2: Shortest Palindrome with Cost Weights
- **Modified Requirement:** Prepending character c incurs cost cost[c - 'a']; minimize total prepending cost.
- **Additional Concepts Introduced:** Weighted string matching / DP on prefix automaton
- **Target Difficulty:** Hard (CF 2200)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 3: Online Stream Shortest Palindrome
- **Modified Requirement:** Characters are streamed in one by one; output the minimum characters needed after each incoming character.
- **Additional Concepts Introduced:** Rolling Hash with double moduli or Palindromic Tree (EERTREE)
- **Target Difficulty:** Master (CF 2400+)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?


---

## 12. Candidate Instructions

1. **Independent Problem Solving:** Do not look up solutions or editorials. Attempt to reach a working prototype within a 45-minute timed interview block.
2. **Implementation Languages:** Choose between modern C++ (C++17 or later) or Python 3. Ensure your solution complies with the stated constraints.
3. **Rigorous Complexity Analysis:** Provide explicit mathematical justifications for both time and auxiliary space complexity.
4. **Edge Case Verification:** Hand-trace all edge cases identified in Section 7 before submitting code.
5. **Interview Explanation:** Practice articulating your thought process aloud, clarifying constraints, presenting trade-offs, and defending your choice of data structures.
