import { useEffect, useState } from "react";
import {
    IconArrowUpRight,
    IconBrandMeta,
} from "@tabler/icons-react";

import {
    Box,
    Group,
    Paper,
    Progress,
    SimpleGrid,
    Text,
    ThemeIcon,
} from "@mantine/core";

/* -------------------- DATA (numeric now) -------------------- */
const data = [
    {
        label: "Traffic Generation Spending",
        part: 55,
        count: 1200000,
        color: "yellow",
    },
    {
        label: "Customers Acquisition Spending",
        part: 30,
        count: 700000,
        color: "blue",
    },
    {
        label: "Brand awareness ",
        part: 15,
        count: 300000,
        color: "grape",
    },
];

/* -------------------- COUNT UP HOOK -------------------- */
function useCountUp(end, duration = 4500) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
                setValue(end);
                clearInterval(timer);
            } else {
                setValue(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end]);

    return value;
}

/* -------------------- MAIN COMPONENT -------------------- */
export default function MetaSpendSection() {
    const totalSpend = 2200000;
    const animatedTotal = useCountUp(totalSpend);

    const segments = data.map((segment) => (
        <Progress.Section
            value={segment.part}
            color={segment.color}
            key={segment.label}
        >
            {segment.part > 10 && (
                <Progress.Label>{segment.part}%</Progress.Label>
            )}
        </Progress.Section>
    ));

    const descriptions = data.map((stat) => {
        const animatedValue = useCountUp(stat.count);

        return (
            <Box
                key={stat.label}
                style={{
                    borderBottom: `3px solid var(--mantine-color-${stat.color}-5)`,
                    paddingBottom: 10,
                }}
            >
                <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
                    {stat.label}
                </Text>

                <Group justify="space-between" align="flex-end" mt={6}>
                    <Text fw={700} size="lg" c="#ffffff">
                        रु {animatedValue.toLocaleString("en-IN")} +
                    </Text>

                    <Text c={stat.color} fw={700} size="sm">
                        {stat.part}%
                    </Text>
                </Group>
            </Box>
        );
    });

    return (
        <Paper
            withBorder
            radius="xl"
            p="xl"
            m="xl"
            bg="rgba(255, 255, 255, 0.16)"
            style={{
                borderColor: "rgba(255,255,255,0.08)",maxWidth: 1250,
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <Group justify="space-between" align="flex-start">
                <div>
                    <Group gap="xs" align="center">
                        <Text fz={42} fw={900} c="#FBFBF8" lh={1}>
                            रु {animatedTotal.toLocaleString("en-IN")}+
                        </Text>

                        <Group gap={4}>
                            <Text c="lime.4" fw={700} size="sm">
                                10%
                            </Text>

                            <IconArrowUpRight
                                size={18}
                                color="#a9e34b"
                            />
                        </Group>
                    </Group>

                    <Text
                        c="rgba(255,255,255,0.65)"
                        mt={8}
                        size="sm"
                    >
                        Total Meta ad spend successfully managed for clients by Aafnai Ad Pvt. Ltd.
                    </Text>
                </div>

                <ThemeIcon
                    size={50}
                    radius="xl"
                    color="yellow"
                    variant="light"
                >
                    <IconBrandMeta size={28} />
                </ThemeIcon>
            </Group>

            <Progress.Root size={38} radius="xl" mt={40}>
                {segments}
            </Progress.Root>

            <SimpleGrid cols={{ base: 1, sm: 3 }} mt="xl">
                {descriptions}
            </SimpleGrid>
        </Paper>
    );
}