
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNStylefySpec.h"

@interface Stylefy : NSObject <NativeStylefySpec>
#else
#import <React/RCTBridgeModule.h>

@interface Stylefy : NSObject <RCTBridgeModule>
#endif

@end
