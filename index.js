function appendDataLayerElement(applicationId,gaAct)
{
    if(${applicationId} === 3){
                dataLayer.push({
                  event: 'EventTriggerGA4',
                  eventName: '$$campaignId_' + gaAct
                });
              } 
              else{
                dataLayer.push({
                  event: 'CWNonInteractive',
                  cat: '$$campaignId',
                  act: gaAct,
                });
        }
}