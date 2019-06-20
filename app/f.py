[Rout("api/[controller]")]
[ApiController]
public class SubscriptionController:ControllerBase
{
    private static readonly HashSet<string> FraudGrapEnabledProviders = new HashSet<string>(StringComparer.OrdinalIngoreCase)
    {
        "Whackamole",
        "ClusterClassification"
    };
    [HttpGet("{subId}/{jobId}")]
    public async Task<string> GetBasicInfo(string subId, string jobId)
    {
      
    }
}
