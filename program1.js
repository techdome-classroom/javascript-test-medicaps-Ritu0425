
    function longestsubstring(s)




{
    //  Implementation of longestSubstring function
    let  longestStringlength=0;

    for (let i=0; i<s.length; i++)
    {

        let currentString =new Set();
        for (let x=i; x<s.length;i++)
        {
            if currentString.has(s[x])
            {
                break;
            }
            else{
                currentString.add(s[x]);
            }
        }
        longestStringlength=Math.max(
            longestStringlength,currentString.size
        );
    }

    return longestStringlength;
};

module.exports = { longestSubstring };
