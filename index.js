const superbowlWin=record.find(result=>{return result.result=== "W"})
//superbowlWin;

  it('returns undefined if the record has no win objects', function() {
    const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
    expect(superbowlWin(sadReality)).to.equal(undefined)

