import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

export interface ProgressProps {
  progress: number; // 0 to 1
  type?: 'bar' | 'circle' | 'circle-fill' | 'custom';
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  strokeWidth?: number;
  borderRadius?: number;
  showPercentage?: boolean;
  percentageTextStyle?: any;
  animated?: boolean;
  duration?: number;
  onAnimationComplete?: () => void;
  children?: React.ReactNode;
}

const Progress: React.FC<ProgressProps> = ({
  progress,
  type = 'bar',
  size = 100,
  width = 200,
  height = 20,
  color = '#ffd33d',
  backgroundColor = 'rgba(255, 255, 255, 0.1)',
  strokeWidth = 8,
  borderRadius = 10,
  showPercentage = false,
  percentageTextStyle,
  animated = true,
  duration = 1000,
  onAnimationComplete,
  children
}) => {
  const animatedProgress = useSharedValue(0);

  React.useEffect(() => {
    if (animated) {
      animatedProgress.value = withTiming(progress, { duration }, (finished) => {
        if (finished && onAnimationComplete) {
          onAnimationComplete();
        }
      });
    } else {
      animatedProgress.value = progress;
    }
  }, [progress, animated, duration]);

  // Animated styles for different progress types
  const barStyle = useAnimatedStyle(() => {
    const progressWidth = interpolate(
      animatedProgress.value,
      [0, 1],
      [0, width],
      Extrapolate.CLAMP
    );
    return {
      width: progressWidth,
    };
  });

  const circleStyle = useAnimatedStyle(() => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = interpolate(
      animatedProgress.value,
      [0, 1],
      [0, circumference],
      Extrapolate.CLAMP
    );
    return {
      width: strokeDasharray,
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    const radius = (size - strokeWidth) / 2;
    const fillRadius = interpolate(
      animatedProgress.value,
      [0, 1],
      [0, radius],
      Extrapolate.CLAMP
    );
    return {
      width: fillRadius * 2,
      height: fillRadius * 2,
      borderRadius: fillRadius,
    };
  });

  const renderBar = () => {
    return (
      <View style={[styles.barContainer, { width, height, borderRadius, backgroundColor }]}>
        <Animated.View
          style={[
            styles.barFill,
            { backgroundColor: color, borderRadius },
            barStyle
          ]}
        />
        {showPercentage && (
          <Text style={[styles.percentageText, percentageTextStyle]}>
            {Math.round(progress * 100)}%
          </Text>
        )}
      </View>
    );
  };

  const renderCircle = () => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
      <View style={styles.circleContainer}>
        <View style={[styles.circleBackground, { width: size, height: size, borderRadius: size / 2, borderWidth: strokeWidth, borderColor: backgroundColor }]}>
          <Animated.View
            style={[
              styles.circleProgress,
              {
                width: size - strokeWidth * 2,
                height: size - strokeWidth * 2,
                borderRadius: (size - strokeWidth * 2) / 2,
                backgroundColor: color,
                opacity: 0.3
              },
              circleStyle
            ]}
          />
        </View>
        {showPercentage && (
          <Text style={[styles.percentageText, percentageTextStyle]}>
            {Math.round(progress * 100)}%
          </Text>
        )}
      </View>
    );
  };

  const renderCircleFill = () => {
    return (
      <View style={[styles.circleContainer, { width: size, height: size }]}>
        <View style={[styles.circleBackground, { width: size, height: size, borderRadius: size / 2, backgroundColor }]}>
          <Animated.View
            style={[
              styles.circleFill,
              { backgroundColor: color },
              fillStyle
            ]}
          />
        </View>
        {showPercentage && (
          <Text style={[styles.percentageText, percentageTextStyle]}>
            {Math.round(progress * 100)}%
          </Text>
        )}
      </View>
    );
  };

  const renderCustom = () => {
    return (
      <View style={styles.customContainer}>
        {children}
      </View>
    );
  };

  const renderProgress = () => {
    switch (type) {
      case 'bar':
        return renderBar();
      case 'circle':
        return renderCircle();
      case 'circle-fill':
        return renderCircleFill();
      case 'custom':
        return renderCustom();
      default:
        return renderBar();
    }
  };

  return renderProgress();
};

const styles = StyleSheet.create({
  barContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  circleBackground: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleProgress: {
    position: 'absolute',
  },
  circleFill: {
    position: 'absolute',
  },
  customContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Progress;