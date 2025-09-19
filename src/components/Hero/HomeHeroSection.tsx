import { Button, Container, Group, Text } from '@mantine/core';
import classes from './HomeHeroSection.module.css';

export function HomeHeroSection() {
    return (
        <div className={classes.wrapper}>
            <Container size={700} className={classes.inner}>
                <h1 className={classes.title}>
                    Bem vindo ao{' '}
                    <Text component="span" variant="gradient" gradient={{ from: 'pink', to: 'cyan' }} inherit>
                        Psicosite
                    </Text>{' '}
                    
                </h1>

                <Text className={classes.description} color="dimmed">
                Plataforma de Gestão para Psicólogos e Clínicas.
                </Text>

                <Group className={classes.controls}>
                    <Button
                        size="xl"
                        className={classes.control}
                        variant="gradient"
                        gradient={{ from: 'pink', to: 'cyan' }
                    }
                    >
                        Teste Grátis
                    </Button>

                    <Button
                        component="a"
                        href="https://github.com/mantinedev/mantine"
                        size="xl"
                        variant="default"
                        className={classes.control}
                    >
                        Planos para Clínicas
                    </Button>
                </Group>
            </Container>
        </div>
    );
}