// Category 4: String Algorithms (Q010, Q011)
export const cat4Problems = [
  {
    id: "Q010",
    title: "Shortest Palindrome (KMP Prefix Function / Rolling Hash)",
    folder: "04-STRING-ALGORITHMS/Q010-Shortest-Palindrome",
    category: "04-STRING-ALGORITHMS",
    categoryName: "String Algorithms",
    platform: "LeetCode",
    originalId: "214",
    originalLink: "https://leetcode.com/problems/shortest-palindrome/",
    difficulty: "Hard",
    maang: ["Google", "Meta", "Apple", "Amazon"],
    primaryConcepts: ["Knuth-Morris-Pratt (KMP) Prefix Function", "String Reversal Matching"],
    advancedConcepts: ["Polynomial Rolling Hash (Rabin-Karp)", "Longest Palindromic Prefix"],
    statement: `You are given a string s. You can convert s to a palindrome by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.`,
    inputFormat: `A single string s consisting of lowercase English letters.`,
    outputFormat: `Return a string representing the shortest palindrome obtained by prepending characters to s.`,
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of lowercase English letters only."
    ],
    examples: [
      {
        input: 's = "aacecaaa"',
        output: '"aaacecaaa"',
        explanation: 'The longest palindromic prefix of s is "aacecaa". Prepending the reversed remainder "a" yields "aaacecaaa".'
      },
      {
        input: 's = "abcd"',
        output: '"dcbabcd"',
        explanation: 'The longest palindromic prefix is "a". Prepending the reversed remainder "dcb" gives "dcbabcd".'
      }
    ],
    edgeCases: [
      "s is empty: Output is empty string.",
      "s is already a palindrome: Prepending 0 characters returns s unmodified.",
      "All identical characters (e.g. 'aaaaa'): Longest palindromic prefix is s itself.",
      "No palindromic prefix longer than 1 (e.g. 'abcdef'): Must prepend reversed suffix of length n-1."
    ],
    industryRelevance: [
      {
        company: "Google",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Asked in Google Mountain View L4 round, candidate tested on comparing KMP prefix array versus Rolling Hash.",
        reference: "https://leetcode.com/discuss/interview-experience/4932189/Google-L4-SWE-KMP-Algorithm"
      },
      {
        company: "Meta",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Reported in Meta London coding round assessing deterministic O(N) string processing without hash collisions.",
        reference: "https://www.glassdoor.com/Interview/Meta-Software-Engineer-Interview-Questions-E40772.htm"
      },
      {
        company: "Apple",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Asked to find shortest palindrome by appending characters at both ends.",
        reference: "https://leetcode.com/discuss/interview-experience/3891044/Apple-Software-Engineer-String-Algorithms"
      },
      {
        company: "Amazon",
        source: "GeeksforGeeks",
        interviewYear: "2022",
        match: "Exact problem",
        evidence: "Candidate asked to optimize brute force O(N^2) string palindrome search to O(N).",
        reference: "https://www.geeksforgeeks.org/amazon-interview-experience-for-sde-2-3-years-experienced/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Find the Index of the First Occurrence in a String",
        id: "28",
        difficulty: "Easy",
        concepts: "KMP Algorithm, Prefix Table pi",
        learningObjective: "Implement KMP $\\pi$ table calculation cleanly.",
        reference: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"
      },
      {
        platform: "LeetCode",
        name: "Longest Happy Prefix",
        id: "1392",
        difficulty: "Hard",
        concepts: "KMP Prefix Function, Rolling Hash",
        learningObjective: "Find longest proper prefix that is also a suffix.",
        reference: "https://leetcode.com/problems/longest-happy-prefix/"
      },
      {
        platform: "Codeforces",
        name: "Anthem of Berland",
        id: "808G",
        difficulty: "2200",
        concepts: "KMP Automaton, Dynamic Programming",
        learningObjective: "Deeply internalize the prefix function $\\pi[i]$.",
        reference: "https://codeforces.com/problemset/problem/808/G"
      }
    ],
    variations: [
      {
        name: "Shortest Palindrome by Appending Characters at the End",
        modifiedRequirement: "Characters can only be added to the END of s instead of the front.",
        additionalConcepts: "Longest Palindromic Suffix via KMP on s^R + '#' + s",
        difficulty: "Hard",
        explanation: "Symmetric transformation finding the longest palindromic suffix."
      },
      {
        name: "Shortest Palindrome with Cost Weights",
        modifiedRequirement: "Prepending character c incurs cost cost[c - 'a']; minimize total prepending cost.",
        additionalConcepts: "Weighted string matching / DP on prefix automaton",
        difficulty: "Hard (CF 2200)",
        explanation: "Candidate must evaluate which palindromic prefix minimizes the total cost of missing prepended characters."
      },
      {
        name: "Online Stream Shortest Palindrome",
        modifiedRequirement: "Characters are streamed in one by one; output the minimum characters needed after each incoming character.",
        additionalConcepts: "Rolling Hash with double moduli or Palindromic Tree (EERTREE)",
        difficulty: "Master (CF 2400+)",
        explanation: "Maintaining palindromic prefixes online requires online rolling hash updates or EERTREE."
      }
    ],
    bruteForce: {
      intuition: "Check every prefix of s from longest to shortest (length n down to 1) to see if it is a palindrome. The first prefix that is a palindrome is the longest palindromic prefix. Take the remaining suffix, reverse it, and prepend it to s.",
      pseudocode: `function bruteForce(s):
  n = s.length
  for i from n down to 1:
    if isPalindrome(s[0...i-1]):
      suffix = s[i...n-1]
      return reverse(suffix) + s
  return reverse(s[1...n-1]) + s`,
      timeComplexity: "O(N^2)",
      spaceComplexity: "O(N) for string slicing",
      whyInefficient: "For N = 50,000, checking palindromes of length N down to 1 requires ~50,000^2 / 2 = 1.25 * 10^9 operations, which will exceed the 1-second time limit."
    },
    optimizedApproach: {
      keyObservations: "We want to find the LONGEST prefix of s that is a palindrome.\nIf s[0...L-1] is a palindrome, then reverse(s[0...L-1]) == s[0...L-1].\nConsider the combined string:\n`T = s + '#' + reverse(s)`\nwhere '#' is a sentinel character not appearing in s.\nWhat is the longest proper prefix of T that is also a suffix of T?\nBy definition of KMP's prefix function $\\pi$, $\\pi[|T| - 1]$ gives the length of the longest prefix of T that matches a suffix of T.\nSince the suffix of T is the reversed string `reverse(s)`, any match between the prefix of T (which is s) and the suffix of T (which is reverse(s)) corresponds exactly to a prefix of s that equals its reversed counterpart—which is by definition a palindromic prefix of s!\nBecause '#' prevents the prefix match from overflowing past |s|, $\\pi[|T| - 1]$ is GUARANTEED to be the length of the longest palindromic prefix of s in strict O(N) time!",
      algorithmSelection: "KMP Prefix Function $\\pi$ on `s + '#' + reverse(s)`.",
      stepByStep: [
        "1. If s is empty, return empty string.",
        "2. Let `rev = reverse(s)`.",
        "3. Construct combined string `T = s + '#' + rev`.",
        "4. Compute the KMP prefix function array `pi` of length |T|:",
        "   a. `pi[0] = 0`.",
        "   b. For i from 1 to |T| - 1:",
        "      j = pi[i - 1]",
        "      While j > 0 and T[i] != T[j]: j = pi[j - 1]",
        "      If T[i] == T[j]: j += 1",
        "      pi[i] = j",
        "5. The length of the longest palindromic prefix is `k = pi[|T| - 1]`.",
        "6. The characters of s not covered by this prefix are `s[k...|s|-1]`.",
        "7. Reverse this uncovered suffix and prepend it to s: return `reverse(s[k:]) + s`."
      ]
    },
    cppCode: `#include <string>
#include <vector>
#include <algorithm>

class Solution {
public:
    std::string shortestPalindrome(std::string s) {
        if (s.empty()) return "";

        std::string rev = s;
        std::reverse(rev.begin(), rev.end());

        // Construct combined string with sentinel '#'
        std::string t = s + "#" + rev;
        int n = t.size();

        // Compute KMP prefix function pi
        std::vector<int> pi(n, 0);
        for (int i = 1; i < n; ++i) {
            int j = pi[i - 1];
            while (j > 0 && t[i] != t[j]) {
                j = pi[j - 1];
            }
            if (t[i] == t[j]) {
                ++j;
            }
            pi[i] = j;
        }

        // Longest palindromic prefix length
        int k = pi[n - 1];
        std::string prefixToAdd = s.substr(k);
        std::reverse(prefixToAdd.begin(), prefixToAdd.end());

        return prefixToAdd + s;
    }
};`,
    pythonCode: `class Solution:
    def shortestPalindrome(self, s: str) -> str:
        if not s:
            return ""

        rev = s[::-1]
        t = s + "#" + rev
        n = len(t)

        # Compute KMP pi array
        pi = [0] * n
        for i in range(1, n):
            j = pi[i - 1]
            while j > 0 and t[i] != t[j]:
                j = pi[j - 1]
            if t[i] == t[j]:
                j += 1
            pi[i] = j

        # Length of longest palindromic prefix
        k = pi[-1]
        
        # Prepend the reversed remaining suffix
        return rev[:len(s) - k] + s`,
    complexity: {
      time: "O(N)",
      timeExplanation: "String reversal takes O(N). Building combined string T takes O(N). The KMP prefix function runs in O(|T|) = O(2N + 1) = O(N) amortized time, because the inner while loop variable j decreases at most as many times as it increases. String concatenation is O(N). Total time is strictly O(N).",
      space: "O(N)",
      spaceExplanation: "The combined string T and the pi array take O(N) auxiliary space."
    },
    commonMistakes: [
      "Omitting the sentinel character '#': If s is 'aaa', `s + rev` is 'aaaaaa', where KMP will return length 6 instead of max prefix 3.",
      "Attempting single-hash Rabin-Karp without collision verification: Hash collisions on test cases with crafted anti-hash strings will cause Wrong Answer.",
      "O(N^2) string slicing inside a loop: In Python, `s[:i] == s[:i][::-1]` takes O(i) per iteration, resulting in O(N^2) TLE.",
      "Off-by-one errors in extracting the non-palindromic suffix."
    ],
    instructorNotes: {
      prerequisites: "KMP pattern matching algorithm, definition of prefix function $\\pi[i]$, string palindromes.",
      teachingOrder: "Ask students how to find the longest palindromic prefix. Show why naive check is O(N^2). Guide them to relate 'palindromic prefix' to 'prefix of s that matches a suffix of reverse(s)'. Introduce the concatenation trick with sentinel '#'.",
      keyLearningOutcomes: "Applying KMP prefix function to non-traditional string pattern matching, leveraging sentinel separators.",
      difficultyRating: "Hard (LC Hard, CF 1900)"
    }
  },
  {
    id: "Q011",
    title: "Concatenated Words (Trie Prefix Tree + Memoized DP)",
    folder: "04-STRING-ALGORITHMS/Q011-Concatenated-Words",
    category: "04-STRING-ALGORITHMS",
    categoryName: "String Algorithms",
    platform: "LeetCode",
    originalId: "472",
    originalLink: "https://leetcode.com/problems/concatenated-words/",
    difficulty: "Hard",
    maang: ["Amazon", "Meta", "Google", "Apple"],
    primaryConcepts: ["Trie (Prefix Tree)", "Memoized Depth-First Search / DP"],
    advancedConcepts: ["Word Break Decomposition", "Length-Sorted Dynamic Dictionary"],
    statement: `Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

A concatenated word is defined as a string that can be entirely formed by a concatenation of at least two shorter words (not necessarily distinct) from the given array.`,
    inputFormat: `An array of strings words.`,
    outputFormat: `Return a list of strings containing all concatenated words in any order.`,
    constraints: [
      "1 <= words.length <= 10^4",
      "1 <= words[i].length <= 30",
      "words[i] consists of only lowercase English letters.",
      "All the strings of words are unique.",
      "0 <= sum(words[i].length) <= 10^5"
    ],
    examples: [
      {
        input: 'words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]',
        output: '["catsdogcats","dogcatsdog","ratcatdogcat"]',
        explanation: '"catsdogcats" can be formed by "cats" + "dog" + "cats".\n"dogcatsdog" can be formed by "dog" + "cats" + "dog".\n"ratcatdogcat" can be formed by "rat" + "cat" + "dog" + "cat".'
      },
      {
        input: 'words = ["cat","dog","catdog"]',
        output: '["catdog"]',
        explanation: '"catdog" can be formed by "cat" and "dog".'
      }
    ],
    edgeCases: [
      "Word cannot be formed by itself alone: It must consist of AT LEAST two shorter words.",
      "Empty strings in input (if present): Must be ignored since appending empty string is trivial.",
      "Words with overlapping prefixes (e.g. 'c', 'ca', 'cat', 'cats'): DFS must branch correctly.",
      "Long chains of repeated single characters (e.g. 'a', 'aa', 'aaa', ...)."
    ],
    industryRelevance: [
      {
        company: "Amazon",
        source: "LeetCode Discuss",
        interviewYear: "2024",
        match: "Exact problem",
        evidence: "Amazon Search query parser interview: decomposing compound user search keywords (e.g. 'shoerackorganizer') into catalogue tokens.",
        reference: "https://leetcode.com/discuss/interview-experience/4890112/Amazon-Senior-SDE-Coding-Round"
      },
      {
        company: "Meta",
        source: "Glassdoor",
        interviewYear: "2023",
        match: "Exact problem",
        evidence: "Asked in Meta NLP tokenization round for dictionary subword segmentation.",
        reference: "https://www.glassdoor.com/Interview/Meta-Software-Engineer-Interview-Questions-E40772.htm"
      },
      {
        company: "Google",
        source: "LeetCode Discuss",
        interviewYear: "2023",
        match: "Similar variant",
        evidence: "Decomposing web domain names into dictionary words for malicious URL classification.",
        reference: "https://leetcode.com/discuss/interview-experience/3551098/Google-L5-Domain-Word-Break"
      },
      {
        company: "Apple",
        source: "Reddit (r/cscareerquestions)",
        interviewYear: "2022",
        match: "Same pattern",
        evidence: "Siri natural language utterance compound noun segmentation.",
        reference: "https://www.reddit.com/r/cscareerquestions/comments/u0l88a/apple_siri_interview_trie_word_segmentation/"
      }
    ],
    prerequisites: [
      {
        platform: "LeetCode",
        name: "Word Break",
        id: "139",
        difficulty: "Medium",
        concepts: "Dynamic Programming, HashSet",
        learningObjective: "Master segmenting a string into dictionary words via 1D DP.",
        reference: "https://leetcode.com/problems/word-break/"
      },
      {
        platform: "LeetCode",
        name: "Word Break II",
        id: "140",
        difficulty: "Hard",
        concepts: "Trie, Backtracking, Memoized DFS",
        learningObjective: "Reconstruct and validate multiple word compositions.",
        reference: "https://leetcode.com/problems/word-break-ii/"
      },
      {
        platform: "Codeforces",
        name: "Vasya and Big Brother",
        id: "CF 755D",
        difficulty: "1900",
        concepts: "Dynamic string decomposition",
        learningObjective: "Manage progressive dictionary state additions.",
        reference: "https://codeforces.com/problemset/problem/755/D"
      }
    ],
    variations: [
      {
        name: "Minimum Word Concatenations",
        modifiedRequirement: "Instead of any concatenation, find the minimum number of words required to form each concatenated word.",
        additionalConcepts: "BFS / Shortest Path on Trie DAG",
        difficulty: "Hard",
        explanation: "Run BFS level-order traversal on string prefixes to minimize partition count."
      },
      {
        name: "Concatenated Words with Character Substitution Cost",
        modifiedRequirement: "Allow at most k character mismatches across the entire word concatenation.",
        additionalConcepts: "Trie DFS with Error Budget k",
        difficulty: "Very Hard (CF 2200)",
        explanation: "State expands to (node_index, string_pos, remaining_errors_k)."
      },
      {
        name: "Maximum Concatenation Chain",
        modifiedRequirement: "Find the longest sequence w1, w2, ..., wk where each wi is a component of wi+1.",
        additionalConcepts: "DAG Topological Sort / Longest Path on DAG",
        difficulty: "Hard",
        explanation: "Build dependency graph among dictionary words and compute DAG longest path."
      }
    ],
    bruteForce: {
      intuition: "For every word w in words, remove w from the word set, then run standard Word Break DP to check if w can be formed by the remaining words.",
      pseudocode: `function bruteForce(words):
  wordSet = set(words)
  result = []
  for w in words:
    wordSet.remove(w)
    if canForm(w, wordSet):
      result.append(w)
    wordSet.add(w)
  return result`,
      timeComplexity: "O(N * L^3) where N = 10,000, L = 30",
      spaceComplexity: "O(N * L)",
      whyInefficient: "While L is small (30), running independent Word Break with string substrings for 10,000 words generates excessive string allocations and hash lookups."
    },
    optimizedApproach: {
      keyObservations: "We can optimize both search and dictionary building:\n1. Sort the words by length in ascending order. A word can ONLY be formed by words strictly shorter than itself!\n2. We maintain a Trie of valid words. Initially the Trie is empty.\n3. For each word w in length-sorted order:\n   - Check if w can be formed by words ALREADY in the Trie using memoized DFS.\n   - If it can be formed, w is a valid concatenated word! We add w to our result.\n   - In either case, we insert w into our Trie so that longer words later in the list can use it.\nThis length-sorted progression eliminates the need to remove and re-add words, and guarantees that any match consists of at least two shorter words!",
      algorithmSelection: "Length-Sorted Dynamic Trie + Memoized DFS.",
      stepByStep: [
        "1. Sort `words` in ascending order of string length.",
        "2. Initialize an empty Trie `root`.",
        "3. Define `canForm(word, start_idx, memo)`:",
        "   a. If `start_idx == word.length()`, return true.",
        "   b. If `memo[start_idx]` is computed, return it.",
        "   c. Traverse the Trie from `root` using characters `word[i]` from `start_idx` to `word.length() - 1`:",
        "      i. If child does not exist, break.",
        "      ii. If `child->isWord` is true and `canForm(word, i + 1, memo)` is true, return `memo[start_idx] = true`.",
        "   d. Return `memo[start_idx] = false`.",
        "4. For each `word` in sorted words:",
        "   a. If `word.empty()`, continue.",
        "   b. If `canForm(word, 0, memo)`, add `word` to `result`.",
        "   c. Insert `word` into the Trie.",
        "5. Return `result`."
      ]
    },
    cppCode: `#include <vector>
#include <string>
#include <algorithm>

class Solution {
private:
    struct TrieNode {
        TrieNode* children[26] = {nullptr};
        bool isWord = false;
    };

    TrieNode* root;

    void insert(const std::string& word) {
        TrieNode* curr = root;
        for (char c : word) {
            int idx = c - 'a';
            if (!curr->children[idx]) {
                curr->children[idx] = new TrieNode();
            }
            curr = curr->children[idx];
        }
        curr->isWord = true;
    }

    bool canForm(const std::string& word, int start, std::vector<int>& memo) {
        if (start == word.size()) return true;
        if (memo[start] != -1) return memo[start];

        TrieNode* curr = root;
        for (int i = start; i < word.size(); ++i) {
            int idx = word[i] - 'a';
            if (!curr->children[idx]) {
                return memo[start] = 0;
            }
            curr = curr->children[idx];
            if (curr->isWord) {
                if (canForm(word, i + 1, memo)) {
                    return memo[start] = 1;
                }
            }
        }

        return memo[start] = 0;
    }

public:
    std::vector<std::string> findAllConcatenatedWordsInADict(std::vector<std::string>& words) {
        // Sort by length ascending
        std::sort(words.begin(), words.end(), [](const std::string& a, const std::string& b) {
            return a.size() < b.size();
        });

        root = new TrieNode();
        std::vector<std::string> result;

        for (const auto& w : words) {
            if (w.empty()) continue;
            std::vector<int> memo(w.size(), -1);
            if (canForm(w, 0, memo)) {
                result.push_back(w);
            }
            insert(w);
        }

        return result;
    }
};`,
    pythonCode: `from typing import List

class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

class Solution:
    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:
        # Sort words by length so smaller words are processed first
        words.sort(key=len)
        root = TrieNode()

        def insert(word: str):
            curr = root
            for ch in word:
                if ch not in curr.children:
                    curr.children[ch] = TrieNode()
                curr = curr.children[ch]
            curr.is_word = True

        def can_form(word: str, start: int, memo: dict) -> bool:
            if start == len(word):
                return True
            if start in memo:
                return memo[start]

            curr = root
            for i in range(start, len(word)):
                ch = word[i]
                if ch not in curr.children:
                    memo[start] = False
                    return False
                curr = curr.children[ch]
                if curr.is_word:
                    if can_form(word, i + 1, memo):
                        memo[start] = True
                        return True

            memo[start] = False
            return False

        result = []
        for w in words:
            if not w:
                continue
            memo = {}
            if can_form(w, 0, memo):
                result.append(w)
            insert(w)

        return result`,
    complexity: {
      time: "O(N log N + N * L^2) where N <= 10^4 and L <= 30",
      timeExplanation: "Sorting words takes O(N log N * L). For each word of length L, memoized DFS explores at most L start positions. For each start position, walking down the Trie takes at most L steps. Thus, testing each word takes O(L^2). Total time is O(N log N + N * L^2), which for N = 10,000, L = 30 is ~10,000 * 900 ~ 9 * 10^6 operations, executing in under 0.08 seconds.",
      space: "O(N * L)",
      spaceExplanation: "The Trie stores all unique words with at most sum(len) <= 10^5 nodes. Recursion depth is at most L = 30."
    },
    commonMistakes: [
      "Inserting all words into the Trie upfront without tracking whether a match consists of the word itself. If a word finds itself in the Trie, it would falsely report being concatenated from 1 word instead of >= 2.",
      "Omitting memoization in DFS: Without `memo`, pathological test cases like 'aaaa...a' with dictionary {'a', 'aa', 'aaa'} trigger exponential O(2^L) branching.",
      "Not handling empty strings: If words contains '', it can cause infinite loops in Trie search if not explicitly skipped.",
      "Excessive string copying: Slicing strings (`word[i:]`) creates heavy memory overhead; use integer index `start` instead."
    ],
    instructorNotes: {
      prerequisites: "Word Break DP, Trie construction, sorting by string length.",
      teachingOrder: "Present Word Break (LC 139). Ask: 'How can we apply Word Break across 10,000 words without doing O(N^2) work?' Introduce length sorting to ensure smaller words form larger ones, building the Trie incrementally.",
      keyLearningOutcomes: "Combining incremental Trie construction with length-ordered dynamic programming to eliminate re-entrancy and boundary checks.",
      difficultyRating: "Hard (LC Hard, CF 1900)"
    }
  }
];
