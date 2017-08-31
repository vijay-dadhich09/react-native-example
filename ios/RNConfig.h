// RNConfig.h
//#import <React/RCTBridgeModule.h>
#import "RCTBridgeModule.h"

@interface RNConfig : NSObject<RCTBridgeModule>
@end

// RNConfig.m
#import "RNConfig.h"
#define kEnvironment "BuildEnvironment"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary<NSString *,id> *)constantsToExport
{
  NSDictionary *infoDict = [[NSBundle mainBundle] infoDictionary];
  return @{@"buildEnvironment": infoDict[@kEnvironment]};
}

@end
